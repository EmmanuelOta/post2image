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
		<div className="flex flex-col min-h-screen bg-stone-50 w-full">
			<main className="flex flex-col items-center justify-between p-8 md:p-24 bg-stone-50 w-full">
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
						priority="true"
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
				</section>


				<section className="flex flex-col items-center justify-center w-full p-8 md:p-24 space-y-8">
					<h1 className={`text-3xl ${libre_baskerville.className}`}>
						About Post2Image
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 place-items-center space-y-6 md:space-y-0 w-full items-stretch">
						<div className="flex flex-col flex-1 items-center justify-center space-y-2 shadow-lg p-8 rounded-lg shadow-stone-300 border border-stone-300 w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-14 fill-stone-600"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
								/>
							</svg>
							<h3 className="text-2xl font-semibold">Fast</h3>
							<p className="text-center text-stone-800 font-medium">
								Post2Image is built with speed in mind. It can
								convert posts to images in a matter of seconds,
								so you can get back to what you were doing.
							</p>
						</div>

						<div className="flex flex-col items-center justify-center space-y-2 shadow-lg p-8 rounded-lg shadow-stone-300 border border-stone-300 w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-14 fill-stone-600"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
								/>
							</svg>

							<h3 className="text-2xl font-semibold">Secure</h3>
							<p className="text-center text-stone-800 font-medium">
								Post2Image is built with security in mind. Your
								data is never shared with anyone, and we take
								your privacy seriously.
							</p>
						</div>

						<div className="flex flex-col items-center justify-center space-y-2 shadow-lg p-8 rounded-lg shadow-stone-300 border border-stone-300 w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-14 fill-stone-600"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>

							<h3 className="text-2xl font-semibold">Download</h3>
							<p className="text-center text-stone-800 font-medium">
								With post2Image, you can download your images in
								a matter of seconds, so you can share them on
								your social handles and with your friends and
								family.
							</p>
						</div>

						<div className="flex flex-col items-center justify-center space-y-2 shadow-lg p-8 rounded-lg shadow-stone-300 border border-stone-300 w-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-14 fill-stone-600"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
								/>
							</svg>

							<h3 className="text-2xl font-semibold">User Friendly</h3>
							<p className="text-center text-stone-800 font-medium">
								Post2Image is built with user experience in mind.
								It is easy to use and has a simple and clean
								interface. You can convert your posts to images
								in just a few clicks.
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex items-center justify-center p-4 w-full h-24 border-t border-stone-400 w-full bg-stone-100">
				<p className="text-sm text-stone-500 w-full">
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
