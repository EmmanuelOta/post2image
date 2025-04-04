"use client";

import { useState } from "react";

const Faq = () => {
	// State to track the active accordion index
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	// Toggle accordion open/close
	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	// FAQ data
	const faqs = [
		{
			question: "What is Post2Image?",
			answer: "Post2Image is a tool that converts X and thread posts into high-quality images for easy sharing.",
		},
		{
			question: "Is Post2Image free to use?",
			answer: "Yes, Post2Image is completely free to use with no hidden charges.",
		},
		{
			question: "Can I convert an entire thread to an image?",
			answer: "Absolutely! Post2Image is the only reliable tool for converting entire threads into images.",
		},
		{
			question: "Does Post2Image support long tweets?",
			answer: "Yes, Post2Image ensures that long tweets are displayed in full without truncation.",
		},
		{
			question: "Is my data secure with Post2Image?",
			answer: "Yes, your data is never shared with anyone, and we prioritize your privacy and security.",
		},
		{
			question: "What platforms does Post2Image support?",
			answer: "Currently, Post2Image supports X (formerly Twitter) and Instagram posts.",
		},
	];

	return (
		<section className="flex flex-col items-center justify-center p-14 w-full bg-stone-50 space-y-6">
			<h2 className="text-3xl font-semibold text-center">
				Frequently Asked Questions
			</h2>
			<div className="w-full max-w-3xl space-y-4">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="border border-stone-300 rounded-lg overflow-hidden"
					>
						<div className="flex items-center justify-between px-6 py-4 bg-stone-50 text-stone-800 font-medium">
							<span>{faq.question}</span>
							<button
								onClick={() => toggleAccordion(index)}
								className={`rounded-full p-2 bg-stone-800 text-white focus:outline-none cursor-pointer hover:bg-stone-700 transition-transform duration-200 ease-in-out ${
									activeIndex === index ? "rotate-45" : ""
								}`}
								aria-label="Toggle FAQ answer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 4.5v15m7.5-7.5h-15"
									/>
								</svg>
							</button>
						</div>
						<div
							className={`overflow-hidden transition-all duration-300 ${
								activeIndex === index ? "max-h-screen" : "max-h-0"
							}`}
						>
							<div className="px-6 py-4 bg-stone-100 text-stone-800">
								{faq.answer}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Faq;
