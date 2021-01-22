export const isEqualJson = (first: any, second: any): boolean => {
	const firstJson = JSON.stringify(first);
	const secondJson = JSON.stringify(second);

	return firstJson === secondJson;
};

export const wait = (milliseconds = 0) => new Promise((resolve) => setTimeout(resolve, milliseconds));
