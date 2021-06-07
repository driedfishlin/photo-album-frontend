// @flow
// >> 被呼叫時計算當前螢幕寬度，並決定要向 server 要求多少張照片

const getWindowWidth = () => document.documentElement?.clientWidth;

export const firstRequest = (): number => {
	const windowWidth = getWindowWidth() || 0;
	if (windowWidth > 768) return 24;
	if (windowWidth > 340) return 14;
	return 8;
};

export const notFirstRequest = (): number => {
	const windowWidth = getWindowWidth() || 0;
	if (windowWidth > 768) return 9;
	if (windowWidth > 340) return 6;
	return 3;
};
