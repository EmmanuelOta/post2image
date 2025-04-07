export function validateLink(link: string): {
  isValid: boolean;
  platform: string | null;
} {
  try {
    // Extract a valid-looking URL from the input
    const match = link.match(/https?:\/\/[^\s]+/);
    if (!match) return { isValid: false, platform: null };

    const url = new URL(match[0]);
    const hostname = url.hostname.replace(/^www\./, "");

    // Basic platform detection (optional, can be skipped)
    if (hostname.includes("twitter.com") || hostname.includes("x.com")) {
      return { isValid: true, platform: "X" };
    }
    if (hostname.includes("instagram.com")) {
      return { isValid: true, platform: "Instagram" };
    }
    if (hostname.includes("threads.net")) {
      return { isValid: true, platform: "Threads" };
    }

    // If it's a valid URL but platform is unknown
    return { isValid: true, platform: null };
  } catch {
    return { isValid: false, platform: null };
  }
}
