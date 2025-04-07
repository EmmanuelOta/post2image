export function validateLink(link: string): {
    isValid: boolean;
    platform: string | null;
} {
    try {
        // Handle case where URL might have text before the actual URL
        const urlMatch = link.match(/https?:\/\/[^\s]+/);
        if (!urlMatch) return { isValid: false, platform: null };
        
        const url = new URL(urlMatch[0]);
        const hostname = url.hostname.replace(/^(www\.|m\.|vm\.|vt\.)?/, "");
        const pathname = url.pathname;
        const searchParams = url.searchParams;

        // X (Twitter) Validation
        if (["twitter.com", "x.com"].includes(hostname)) {
            const tweetPattern = /^\/[A-Za-z0-9_-]+\/status\/[0-9]+\/?/;
            if (tweetPattern.test(pathname)) {
                return { isValid: true, platform: "X" };
            }
        }

        // Instagram Validation
        if (hostname === "instagram.com") {
            const instaPattern = /^\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?/;
            if (instaPattern.test(pathname)) {
                return { isValid: true, platform: "Instagram" };
            }
        }

        // Threads Validation
        if (hostname === "threads.net") {
            const threadsPatterns = [
                /^\/(@[A-Za-z0-9_.]+\/)?post\/[A-Za-z0-9]+\/?/,
                /^\/t\/[A-Za-z0-9]+\/?/,
                /^\/[A-Za-z0-9]+\/?/  // Short format
            ];
            if (threadsPatterns.some(pattern => pattern.test(pathname))) {
                return { isValid: true, platform: "Threads" };
            }
        }

        // Facebook Validation
        if (["facebook.com", "fb.com", "fb.watch"].includes(hostname)) {
            // Story pattern
            if ((pathname === "/story.php" && searchParams.has("story_fbid")) ||
                (pathname === "/photo.php" && searchParams.has("fbid")) ||
                pathname === "/watch" ||
                /^\/[A-Za-z0-9_.]+\/videos\/[0-9]+\/?/.test(pathname) ||
                /^\/[A-Za-z0-9_.]+\/posts\/[0-9]+\/?/.test(pathname) ||
                /^\/[A-Za-z0-9_.]+\/[0-9]+\/?/.test(pathname)) {
                return { isValid: true, platform: "Facebook" };
            }
        }

        // TikTok Validation
        if (["tiktok.com", "vm.tiktok.com", "vt.tiktok.com"].includes(hostname)) {
            const tiktokPatterns = [
                /^\/@[A-Za-z0-9_.]+\/video\/[0-9]+\/?/,
                /^\/[A-Za-z0-9]+\/?/,  // For shortened URLs
                /^\/t\/[A-Za-z0-9]+\/?/  // Alternative format
            ];
            if (tiktokPatterns.some(pattern => pattern.test(pathname))) {
                return { isValid: true, platform: "TikTok" };
            }
        }

        return { isValid: false, platform: null };
    } catch (err) {
        return { isValid: false, platform: null };
    }
}
