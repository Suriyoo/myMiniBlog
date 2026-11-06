type JourneyEntry = {
	period: string;
	title: string;
	description: string;
};

type SocialLink = {
	label: string;
	href: string;
};

export const profile = {
	displayName: '姓名 / 昵称待填写',
	tagline: '个人标语待填写',
	introduction: '待填写：介绍你的背景、关注领域，以及创建这个博客的原因。',
	introductionEn: 'Add a short introduction about your background, interests, and why you started this blog.',
	portrait: {
		src: '',
		alt: '个人照片待补充',
	},
	interests: ['待填写：兴趣与关注领域'],
	journey: [] as JourneyEntry[],
	thingsILove: [
		{ category: '书籍', english: 'BOOKS', value: '待填写' },
		{ category: '音乐', english: 'MUSIC', value: '待填写' },
		{ category: '电影', english: 'FILM', value: '待填写' },
		{ category: '游戏', english: 'GAMES', value: '待填写' },
		{ category: '旅行', english: 'TRAVEL', value: '待填写' },
		{ category: '其他', english: 'OTHERS', value: '待填写' },
	],
	currently: [
		{ label: '正在学习', english: 'LEARNING', value: '待填写' },
		{ label: '正在阅读', english: 'READING', value: '待填写' },
		{ label: '正在制作', english: 'MAKING', value: '待填写' },
	],
	contact: {
		email: '',
		socialLinks: [] as SocialLink[],
	},
};