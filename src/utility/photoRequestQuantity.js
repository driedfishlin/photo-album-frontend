const getWindowWidth = () => document.documentElement.clientWidth;

export const firstRequest = () => {
	if (getWindowWidth > 768) return 24;
	if (getWindowWidth > 340) return 14;
	return 8;
};

export const notFirstRequest = () => {
	if (getWindowWidth > 768) return 9;
	if (getWindowWidth > 340) return 6;
	return 3;
};
