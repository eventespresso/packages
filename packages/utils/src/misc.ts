export const isEqualJson = (first: any, second: any): boolean => {
	const firstJson = JSON.stringify(first);
	const secondJson = JSON.stringify(second);

	return firstJson === secondJson;
};
