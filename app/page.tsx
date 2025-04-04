import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Libre_Baskerville } from "next/font/google";

const libre_baskerville = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
	style: "italic",
});

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-stone-50">
			<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-stone-50">
				<section className="flex flex-col items-center justify-center space-y-3 w-full h-full max-w-2xl">
					<img
						src="/images/post2image.png"
						width={200}
						height={200}
						alt="post2image"
						className="rounded-full mb-4"
						loading="lazy"
						decoding="async"
						// @ts-ignore
						// eslint-disable-next-line @next/next/no-img-element
						priority
					/>
					<div className="flex flex-col items-center justify-center space-y-3">
						<h1
							className={`text-3xl ${libre_baskerville.className}`}
						>
							Post2Image
						</h1>
						<p className="text-lg text-center font-medium">
							Convert X and thread posts to images
						</p>
						<Input className="focus:outline-none focus:ring-none" />
						<Button
							className="w-full max-w-xs cursor-pointer"
							variant="default"
						>
							Convert
						</Button>
					</div>
					<div></div>
				</section>
			</main>
			<footer className="flex items-center justify-center p-4 w-full h-24 border-t border-stone-400 w-full">
				<p className="text-sm text-gray-500 w-full">
					By using this service, you agree to our
					<a className="text-blue-500 hover:underline mx-1">
						terms of service
					</a>
					and
					<a className="text-blue-500 hover:underline mx-1">
						privacy policy
					</a>
					.
				</p>
			</footer>
		</div>
	);
}
