"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
						<button
							onClick={() => toggleAccordion(index)}
							className="w-full text-left px-6 py-4 bg-stone-50 text-stone-800 font-medium focus:outline-none"
						>
							{faq.question}
						</button>
						<motion.div
							initial={{ height: 0 }}
							animate={{
								height: activeIndex === index ? "auto" : 0,
							}}
							className="overflow-hidden"
							transition={{ duration: 0.3 }}
						>
							<div className="px-6 py-4 bg-stone-100 text-stone-800">
								{faq.answer}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Faq;
