export const getEEDOMData = async () => {
	return await page.evaluate(() => window.eventEspressoData);
};
