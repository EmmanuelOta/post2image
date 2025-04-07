import { Libre_Baskerville, Roboto } from "next/font/google";
import Faq from "@/components/Faq";
import PostConverter from "@/components/PostConverter";

const libre_baskerville = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
	style: "italic",
});

const roboto_font = Roboto({
	weight: "400",
	subsets: ["latin"],
	style: "normal",
	variable: "--font-roboto",
});

export default function Home() {
	return (
		<div
			className={`${roboto_font.variable} antialiased flex flex-col min-h-screen bg-stone-50 w-full`}
		>
			<main className="flex flex-col items-center justify-between bg-stone-50 w-full">
				<section className="flex flex-col items-center justify-center p-8 md:p-24 space-y-3 w-full h-full max-w-2xl">
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
							Convert Ig, Threads, Facebook, Tiktok and X posts to images
						</p>
						<PostConverter />
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
							<h3 className="text-2xl text-center font-semibold">
								Fast
							</h3>
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

							<h3 className="text-2xl text-center font-semibold">
								Secure
							</h3>
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

							<h3 className="text-2xl text-center font-semibold">
								Download
							</h3>
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

							<h3 className="text-2xl text-center font-semibold">
								User Friendly
							</h3>
							<p className="text-center text-stone-800 font-medium">
								Post2Image is built with user experience in
								mind. It is easy to use and has a simple and
								clean interface. You can convert your posts to
								images in just a few clicks.
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
									d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
								/>
							</svg>

							<h3 className="text-2xl text-center font-semibold">
								Tool
							</h3>
							<p className="text-center text-stone-800 font-medium">
								Post2Image is a tool that allows you to convert
								Ig, X and Thread posts to images. It is built
								with the latest technologies and is constantly
								being updated with new features.
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
									d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
								/>
							</svg>

							<h3 className="text-2xl text-center font-semibold">
								Unlimited Downloads
							</h3>
							<p className="text-center text-stone-800 font-medium">
								Post2Image allows you to download as many images
								as you want. There are no limits on the number
								of images you can download.
							</p>
						</div>
					</div>
				</section>

				<section className="flex items-center justify-center p-14 w-full">
					<div className="flex flex-col md:flex-row space-x-10 items-center justify-center">
						<div className="flex items-center justify-center p-8 md:p-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-44 md:size-96 mb-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
						</div>

						<div className="flex flex-col justify-center space-y-4 p-8">
							<h3 className="text-2xl font-medium">
								How to convert posts to images
							</h3>
							<div>
								<ol className="list-decimal list-inside space-y-2 font-medium">
									<li>
										Copy the link to the post you want to
										convert (e.g., from X, Threads or
										Instagram).
									</li>
									<li>
										Paste the link into the input field
										labeled "Paste link to Ig, Threads or X
										post"
									</li>
									<li>
										Click the "Convert" button to process
										the post.
									</li>
									<li>
										Once the image is generated, click the
										"Download" button to save it to your
										device.
									</li>
									<li>Share or use the image as needed.</li>
								</ol>
							</div>
						</div>
					</div>
				</section>

				<section className="flex flex-col items-center justify-center p-14 w-full bg-gradient-to-r from-stone-50 to-stone-100 space-y-6">
					<h2 className="text-3xl font-semibold text-center">
						Why Choose Post2Image?
					</h2>
					<div className="space-y-6 md:space-y-2 font-medium">
						<p className="text-lg text-stone-800 max-w-3xl">
							Post2Image stands out as the ultimate tool for
							converting posts to images. Unlike other tools, it
							ensures that exceptionally long tweets are displayed
							in full, without the annoying "show more"
							truncation. This guarantees that you capture the
							complete content of the post, no matter its length.
						</p>
						<p className="text-lg text-stone-800 max-w-3xl">
							Additionally, Post2Image is the only reliable thread
							post-to-image converter available. Whether you're
							converting a single post or an entire thread, you
							can trust Post2Image to deliver accurate and
							high-quality results every time.
						</p>
					</div>
				</section>
				<Faq />
			</main>
		</div>
	);
}
