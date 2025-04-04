export function validateLink(link: string): {
	isValid: boolean;
	platform: string | null;
} {
	// Define regex patterns for each platform
	const twitterPattern =
		/^https?:\/\/(www\.)?(twitter\.com|x\.com)\/[A-Za-z0-9_]+\/status\/\d+$/;
	const instagramPattern =
		/^https?:\/\/(www\.)?instagram\.com\/p\/[A-Za-z0-9_-]+\/?$/;
	const threadsPattern =
		/^https?:\/\/(www\.)?threads\.net\/t\/[A-Za-z0-9_-]+\/?$/;

	// Check if the link matches any of the patterns
	if (twitterPattern.test(link)) {
		return { isValid: true, platform: "X" };
	} else if (instagramPattern.test(link)) {
		return { isValid: true, platform: "Instagram" };
	} else if (threadsPattern.test(link)) {
		return { isValid: true, platform: "Threads" };
	}

	// If no match, return false with null platform
	return { isValid: false, platform: null };
}
