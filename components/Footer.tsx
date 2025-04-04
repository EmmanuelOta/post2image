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
			className={`${roboto_font.variable} bg-stone-50 text-stone-800 py-6 bg-stone-100 text-stone-800 py-6`}
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
							className="w-5 h-5"
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
							className="w-5 h-5"
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
						href="https://threads.net/coder_zi"
						className="text-stone-800"
						aria-label="Follow us on Threads"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.472 10.222c-1.412-.982-3.03-1.472-4.722-1.472-2.5 0-4.25 1.25-4.25 3.25 0 1.472.722 2.472 2.472 3.472 1.222.694 2.25 1.028 2.25 1.778 0 .694-.472 1.222-1.472 1.222-.944 0-1.472-.472-1.944-1.472-.472-1-.694-2.028-1.472-2.028-.472 0-.778.25-.778.722 0 .944.472 2.028.944 2.778.944 1.222 2.222 1.472 3.472 1.472 2.472 0 4.25-1.25 4.25-3.25 0-1.472-.722-2.472-2.472-3.472-1.222-.694-2.25-1.028-2.25-1.778 0-.694.472-1.222 1.472-1.222.944 0 1.472.472 1.944 1.472.472 1 .694 2.028 1.472 2.028.472 0 .778-.25.778-.722 0-.944-.472-2.028-.944-2.778Z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
