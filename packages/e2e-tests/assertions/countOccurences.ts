export const countOccurences = (string: string, word: string): number => {
	return string.split(word).length - 1;
};
