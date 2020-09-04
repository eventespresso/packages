import { useCallback, useMemo, useState } from 'react';

export interface PrevNext {
	current: number;
	goto: (index: number) => void;
	next: VoidFunction;
	prev: VoidFunction;
	reset: VoidFunction;
}

export const usePrevNext = (initialIndex = 0): PrevNext => {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);

	const goto = useCallback((index: number) => setCurrentIndex(index), []);

	const next = useCallback<PrevNext['next']>(() => setCurrentIndex((v) => v + 1), []);

	const prev = useCallback<PrevNext['prev']>(() => setCurrentIndex((v) => v - 1), []);

	const reset = useCallback<PrevNext['reset']>(() => setCurrentIndex(initialIndex), [initialIndex]);

	return useMemo(() => ({ current: currentIndex, goto, next, prev, reset }), [currentIndex, goto, next, prev, reset]);
};
