// app/api/convert-post/route.ts
import { NextResponse } from "next/server";
import { validateLink } from "@/lib/validateLink";
import puppeteer from "puppeteer";

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

		// Use puppeteer to take a screenshot of the post
		const browser = await puppeteer.launch({
			headless: true,
		});

		const page = await browser.newPage();

		// Set viewport to ensure good quality screenshot
		await page.setViewport({ width: 600, height: 800 });

		// Navigate to the page
		await page.goto(link, { waitUntil: "networkidle2" });

		// Different platforms might need different selectors or wait times
		switch (platform) {
			case "X":
				// Wait for X post to fully load
				await page.waitForSelector('article[data-testid="tweet"]', {
					timeout: 5000,
				});
				break;
			case "Instagram":
				// Wait for Instagram post to fully load
				await page.waitForSelector('article[role="presentation"]', {
					timeout: 5000,
				});
				break;
			case "Threads":
				// Wait for Threads post to fully load
				await page.waitForSelector("article", { timeout: 5000 });
				break;
		}

		// Take screenshot of the post element
		let element;
		try {
			if (platform === "X") {
				element = await page.$('article[data-testid="tweet"]');
			} else if (platform === "Instagram") {
				element = await page.$('article[role="presentation"]');
			} else if (platform === "Threads") {
				element = await page.$("article");
			}

			if (!element) {
				throw new Error("Post element not found");
			}

			const screenshot = await element.screenshot({ type: "png" });

			// Convert buffer to base64 string
			const base64Image = Buffer.from(screenshot).toString("base64");
			const imageUrl = `data:image/png;base64,${base64Image}`;

			await browser.close();

			return NextResponse.json({ imageUrl });
		} catch (error) {
			await browser.close();
			throw error;
		}
	} catch (error) {
		console.error("Error converting post:", error);
		return NextResponse.json(
			{ message: "Failed to convert post" },
			{ status: 500 }
		);
	}
}
