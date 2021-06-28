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
 * ["people", "1", "address", "0", "phones", "0", "code"]
 */
export const strToPath = (str: string): Array<string> => str.split(/[[\].]+/).filter(Boolean);
