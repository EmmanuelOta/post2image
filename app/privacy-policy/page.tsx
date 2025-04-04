"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
	const router = useRouter();

	return (
		<div className="bg-stone-50 text-stone-800 min-h-screen py-12 px-6 md:px-24">
			<div className="max-w-4xl mx-auto space-y-8">
				<button
					onClick={() => router.push("/")}
					className="inline-flex items-center justify-center text-blue-500 hover:underline font-medium cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6 mr-1"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5 8.25 12l7.5-7.5"
						/>
					</svg>
					Back to Home
				</button>
				<h1 className="text-4xl font-bold text-center">
					Privacy Policy
				</h1>
				<p className="text-lg">
					Your privacy is important to us. This Privacy Policy
					explains how we collect, use, and protect your information
					when you use Post2Image.
				</p>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						1. Information We Collect
					</h2>
					<p>
						We may collect the following types of information when
						you use our service:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>
							<strong>Personal Information:</strong> Information
							you provide, such as your email address, when
							contacting us.
						</li>
						<li>
							<strong>Usage Data:</strong> Information about how
							you interact with our service, such as the links you
							paste and the features you use.
						</li>
					</ul>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						2. How We Use Your Information
					</h2>
					<p>We use the information we collect to:</p>
					<ul className="list-disc list-inside space-y-2">
						<li>Provide and improve our service.</li>
						<li>Respond to your inquiries and support requests.</li>
						<li>
							Analyze usage patterns to enhance user experience.
						</li>
					</ul>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">3. Data Security</h2>
					<p>
						We take reasonable measures to protect your information
						from unauthorized access, disclosure, or destruction.
						However, no method of transmission over the internet or
						electronic storage is 100% secure.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						4. Sharing Your Information
					</h2>
					<p>
						We do not sell, trade, or rent your personal
						information. We may share your information only in the
						following circumstances:
					</p>
					<ul className="list-disc list-inside space-y-2">
						<li>With your consent or at your direction.</li>
						<li>
							To comply with legal obligations or protect our
							rights.
						</li>
					</ul>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						5. Third-Party Services
					</h2>
					<p>
						We may use third-party services to analyze usage data or
						improve our service. These third parties are bound by
						their own privacy policies.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">
						6. Changes to This Policy
					</h2>
					<p>
						We may update this Privacy Policy from time to time.
						Changes will be posted on this page, and your continued
						use of the service constitutes acceptance of the updated
						policy.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-semibold">7. Contact Us</h2>
					<p>
						To contact us, check the footer to see our various
						social media handes.
					</p>
				</section>

				<p className="text-center text-sm text-stone-600">
					Last updated: {new Date().toLocaleDateString()}
				</p>
			</div>
		</div>
	);
}
