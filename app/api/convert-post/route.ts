// app/api/convert-post/route.ts
import { NextResponse } from "next/server";
import { validateLink } from "@/lib/validateLink";
import puppeteer from "puppeteer-core";
import chrome from "chrome-aws-lambda";

// Determine the Chrome executable path and launch options based on the environment
const getOptions = async () => {
	// For local development (non-Lambda/Vercel environment)
	if (process.env.NODE_ENV !== "production") {
		return {
			args: [],
			executablePath:
				process.platform === "win32"
					? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
					: process.platform === "linux"
					? "/usr/bin/google-chrome"
					: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
			headless: true,
		};
	}

	// For Vercel/Lambda production environment
	return {
		args: chrome.args,
		executablePath: await chrome.executablePath,
		headless: true,
	};
};

export async function POST(request: Request) {
	try {
		const { link, platform } = await request.json();

		// Validate the link again on the server side
		const validation = validateLink(link);
		if (!validation.isValid) {
			return NextResponse.json(
				{ message: "Invalid link" },
				{ status: 400 }
			);
		}

		// Get browser options based on environment
		const options = await getOptions();

		// Launch browser with appropriate options
		const browser = await puppeteer.launch(options);
		const page = await browser.newPage();

		await page.setUserAgent(
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
				"(KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36"
		);

		// Set viewport to ensure good quality screenshot
		await page.setViewport({ width: 600, height: 800 });

		console.log(`Navigating to: ${link}`);

		// Navigate to the page with increased timeout and error handling
		try {
			await page.goto(link, {
				waitUntil: "networkidle2",
				timeout: 60000,
			});
		} catch (error) {
			console.error("Navigation error:", error);
			await browser.close();
			return NextResponse.json(
				{
					message:
						"Failed to load the page. The site might be blocking automated access.",
				},
				{ status: 500 }
			);
		}

		console.log(`Loaded page for platform: ${platform}`);

		// Different platforms might need different selectors or wait times
		let selector;
		switch (platform) {
			case "X":
				selector = 'article[data-testid="tweet"]';
				break;
			case "Instagram":
				selector = 'article[role="presentation"]';
				break;
			case "Threads":
				selector = "article";
				break;
			case "Facebook":
				selector = '[data-testid="post_message"]';
				break;
			case "TikTok":
				selector = ".tiktok-1rgp3yt-DivItemContainer";
				break;
			default:
				throw new Error("Unsupported platform");
		}

		try {
			// Wait for the selector with timeout
			console.log(`Waiting for selector: ${selector}`);
			await page.waitForSelector(selector, { timeout: 30000 });
		} catch (error) {
			console.error("Selector wait error:", error);
			await browser.close();
			return NextResponse.json(
				{
					message: `Could not find the ${platform} post content on the page.`,
				},
				{ status: 500 }
			);
		}

		// Take screenshot of the post element
		try {
			const element = await page.$(selector);

			if (!element) {
				throw new Error("Post element not found after waiting");
			}

			console.log("Taking screenshot");
			const screenshot = await element.screenshot({
				type: "png",
				omitBackground: true,
			}) as Buffer;

			// Convert buffer to base64 string
			const base64Image = Buffer.from(screenshot).toString("base64");
			const imageUrl = `data:image/png;base64,${base64Image}`;

			await browser.close();
			console.log("Successfully created screenshot");

			return NextResponse.json({
				imageUrl,
				platform,
			});
		} catch (error) {
			console.error("Screenshot error:", error);
			await browser.close();
			throw error;
		}
	} catch (error) {
		console.error("Error converting post:", error);
		return NextResponse.json(
			{
				message:
					"Failed to convert post: " +
					(error instanceof Error ? error.message : "Unknown error"),
			},
			{ status: 500 }
		);
	}
}
