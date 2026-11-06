// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Mintsweet ♡";
export const SITE_DESCRIPTION = "记录生活、分享灵感，也收藏那些值得记住的小事。";

export const BLOG_CATEGORIES = ["Life", "Tech", "Notes", "Games"] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const CATEGORY_ZH: Record<BlogCategory, string> = {
	Life: "生活",
	Tech: "技术",
	Notes: "笔记",
	Games: "游戏",
};
