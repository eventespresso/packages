export const isEqualJson = (first: any, second: any): boolean => {
	const firstJson = JSON.stringify(first);
	const secondJson = JSON.stringify(second);

	return firstJson === secondJson;
};

/**
 * Asynchronously wait for the given time. By default it waits the next event cycle.
 */
export const wait = (milliseconds = 0) => new Promise((resolve) => setTimeout(resolve, milliseconds));

/**
 * converts dot and bracket syntax path to ramda path, i.e.
 * 'user.address[0].phones[0].code'
 * to
 * ["user", "address", "0", "phones", "0", "code"]
 */
export const strToPath = (str: string): Array<string> => str.split(/[[\].]+/).filter(Boolean);

/**
 * Creates an array of n numbers starting from `startIndex`
 *
 * @example
 * arrayOfN(10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * arrayOfN(9, -4) // [-4, -3, -2, -1, 0, 1, 2, 3, 4]
 * arrayOfN(5, 2021, 'negative'); // [2021, 2020, 2019, 2018, 2017]
 */
export const arrayOfN = (n: number, startIndex = 1, dir: 'positive' | 'negative' = 'positive') => {
	return Array.from({ length: n }, (_, i) => startIndex + (dir === 'positive' ? +i : -i));
};
