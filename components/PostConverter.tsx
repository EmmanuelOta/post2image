"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateLink } from "@/lib/validateLink";

interface PostData {
	platform: string;
	imageUrl: string | null;
	error: string | null;
}

export default function PostConverter() {
	const [link, setLink] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [postData, setPostData] = useState<PostData | null>(null);

	const handleConvert = async () => {
		setIsLoading(true);
		setPostData(null);

		// First validate the link
		const { isValid, platform } = validateLink(link);

		if (!isValid) {
			setPostData({
				platform: "",
				imageUrl: null,
				error: "Invalid link. Please enter a valid X, Instagram, or Threads post link.",
			});
			setIsLoading(false);
			setLink("");
			return;
		}

		try {
			// Make an API call to your backend to convert the post
			const response = await fetch("/api/convert-post", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ link, platform }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Failed to convert post");
			}

			setPostData({
				platform: data.platform,
				imageUrl: data.imageUrl,
				error: null,
			});
		} catch (error) {
			setPostData({
				platform: platform || "",
				imageUrl: null,
				error:
					error instanceof Error
						? error.message
						: "An unknown error occurred",
			});
		} finally {
			setIsLoading(false);
			setLink("");
		}
	};

	const handleDownload = () => {
		if (postData?.imageUrl) {
			const link = document.createElement("a");
			link.href = postData.imageUrl;
			link.download = `post2image-${postData.platform.toLowerCase()}-${Date.now()}.png`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	};

	return (
		<div className="flex flex-col items-center w-full space-y-4">
			<div className="flex flex-col w-full space-y-3">
				<Input
					className="focus:outline-none focus:ring-none"
					placeholder="Paste link to Ig, Threads or X post"
					value={link}
					onChange={(e) => setLink(e.target.value)}
				/>
				<Button
					className="w-full max-w-xs cursor-pointer mx-auto disabled:cursor-not-allowed"
					variant="default"
					onClick={handleConvert}
					disabled={isLoading}
				>
					{isLoading ? "Converting..." : "Convert"}
				</Button>
			</div>

			{postData?.error && (
				<div className="text-white text-center p-2 rounded bg-red-400">
					{postData.error}
				</div>
			)}

			{postData?.imageUrl && (
				<div className="flex flex-col items-center space-y-4 w-full">
					<div className="border border-stone-300 rounded-lg overflow-hidden max-w-lg w-full">
						<img
							src={postData.imageUrl}
							alt={`Converted ${postData.platform} post`}
							className="w-full h-auto"
						/>
					</div>
					<Button
						className="w-full max-w-xs cursor-pointer inline-flex items-center justify-center"
						variant="outline"
						onClick={handleDownload}
					>
						Download Image
					</Button>
				</div>
			)}
		</div>
	);
}
