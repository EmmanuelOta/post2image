import { Roboto } from "next/font/google";

const roboto_font = Roboto({
	weight: "400",
	subsets: ["latin"],
	style: "normal",
	variable: "--font-roboto",
});

const Footer = () => {
	return (
		<footer
			className={`${roboto_font.variable} text-stone-800 py-6 bg-stone-100 text-stone-800`}
		>
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 px-4">
				<div className="text-center md:text-left">
					<p className="text-lg font-medium">
						&copy; {new Date().getFullYear()} Post2Image. All rights
						reserved.
					</p>
				</div>
				<div className="flex space-x-4">
					<a
						href="/terms-of-service"
						className="text-blue-400 hover:underline"
					>
						Terms of Service
					</a>
					<a
						href="/privacy-policy"
						className="text-blue-400 hover:underline"
					>
						Privacy Policy
					</a>
				</div>
				<div
					className="flex space-x-4"
					title="Follow me on social media"
				>
					<a
						href="https://x.com/coder_zi"
						className="text-stone-800"
						aria-label="Follow us on X"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.25 3 12 10.5 6.75 3H3l7.5 9L3 21h3.75L12 13.5 17.25 21H21l-7.5-9L21 3h-3.75Z"
							/>
						</svg>
					</a>
					<a
						href="https://www.instagram.com/coder_zi/"
						className="text-stone-800"
						aria-label="Follow us on Instagram"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="size-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M7.5 2.25h9a5.25 5.25 0 0 1 5.25 5.25v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.125 7.875h.008v.008h-.008v-.008zM12 8.625a3.375 3.375 0 1 0 0 6.75 3.375 3.375 0 0 0 0-6.75z"
							/>
						</svg>
					</a>
					<a
						href="https://threads.net/@coder_zi"
						className="text-stone-800"
						aria-label="Follow us on Threads"
					>
						<img
							src="/images/threads.svg"
							alt="follow coder_zi on threads"
							width={30}
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
