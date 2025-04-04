import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";

const roboto_font = Roboto({
	weight: "400",
	subsets: ["latin"],
	style: "normal",
	variable: "--font-roboto",
});

export default function TermsOfService() {
	const router = useRouter();

	return (
		<div
			className={`${roboto_font.className} bg-stone-50 text-stone-800 min-h-screen py-12 px-6 md:px-24`}
		>
			<div className="max-w-4xl mx-auto space-y-8">
				<button
					onClick={() => router.push("/")}
					className="text-blue-500 hover:underline font-medium"
				>
					← Back to Home
				</button>
				<h1 className="text-4xl font-bold text-center">
					Terms of Service
				</h1>
				<p className="text-lg">
					Welcome to Post2Image! By using our service, you agree to
					the following terms and conditions. Please read them
					carefully.
				</p>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						1. Acceptance of Terms
					</h2>
					<p>
						By accessing or using Post2Image, you agree to be bound
						by these Terms of Service. If you do not agree to these
						terms, please do not use our service.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						2. Use of Service
					</h2>
					<p>
						Post2Image is provided for personal and non-commercial
						use only. You agree not to misuse the service or use it
						for any unlawful purposes.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						3. Intellectual Property
					</h2>
					<p>
						All content, trademarks, and logos on Post2Image are the
						property of their respective owners. You are not
						permitted to use any of these without prior written
						consent.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">4. Privacy</h2>
					<p>
						We value your privacy. Please refer to our{" "}
						<a
							href="/privacy-policy"
							className="text-blue-500 hover:underline"
						>
							Privacy Policy
						</a>{" "}
						for details on how we collect, use, and protect your
						information.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						5. Limitation of Liability
					</h2>
					<p>
						Post2Image is provided "as is" without any warranties.
						We are not responsible for any damages or losses
						resulting from your use of the service.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						6. Changes to Terms
					</h2>
					<p>
						We reserve the right to update these Terms of Service at
						any time. Continued use of the service after changes
						indicates your acceptance of the updated terms.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">7. Contact Us</h2>
					<p>
						If you have any questions or concerns about these Terms
						of Service, please{" "}
						<a
							href="/contact"
							className="text-blue-500 hover:underline"
						>
							contact us
						</a>
						.
					</p>
				</section>

				<p className="text-center text-sm text-stone-600">
					Last updated: {new Date().toLocaleDateString()}
				</p>
			</div>
		</div>
	);
}
