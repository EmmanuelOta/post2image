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
							viewBox="0 0 120 120"
							clas
							fill="none"
						>
							<path
								fill="black"
								d="M60 0C26.862 0 0 26.862 0 60s26.862 60 60 60 60-26.862 60-60S93.138 0 60 0zm-.232 100c-12.535 0-22.736-10.2-22.736-22.736 0-11.08 8.655-20.14 19.653-21.12 1.252-.111 2.504-.184 3.755-.23v-1.932c0-3.253-.855-5.68-2.58-7.245-1.633-1.476-4.09-2.236-7.328-2.236-5.718 0-11.552 2.09-15.957 5.72l-3.938-6.02c5.276-4.205 12.46-6.79 19.895-6.79 5.19 0 9.302 1.346 12.25 4.016 3.003 2.723 4.563 6.73 4.563 11.922v24.315c0 4.446 2.114 6.724 5.016 6.724 2.683 0 5.19-1.703 7.328-4.978l5.56 4.853c-3.65 5.568-8.736 8.608-14.245 8.608-6.725 0-11.557-3.815-13.445-9.33-3.17 5.096-8.28 8.192-14.064 8.192z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
