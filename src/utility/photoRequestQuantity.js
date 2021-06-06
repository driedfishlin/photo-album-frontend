const getWindowWidth = () => document.documentElement.clientWidth;

export const firstRequest = () => {
	const windowWidth = getWindowWidth();
	// if (windowWidth > 768) return 6;
	if (windowWidth > 768) return 24;
	if (windowWidth > 340) return 14;
	return 8;
};

export const notFirstRequest = () => {
	const windowWidth = getWindowWidth();
	// if (windowWidth > 768) return 3;
	if (windowWidth > 768) return 9;
	if (windowWidth > 340) return 6;
	return 3;
};
