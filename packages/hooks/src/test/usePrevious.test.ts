import { renderHook } from '@testing-library/react-hooks';

import usePrevious from '../usePrevious';

const setUp = <T>(initialState: T) => {
	return renderHook(({ state }) => usePrevious(state), { initialProps: { state: initialState } });
};

describe('usePrevious', () => {
	it('should return undefined on initial render', () => {
		const { result } = setUp(0);

		expect(result.current).toBeUndefined();
	});

	it('should always return previous state after each update for a "number"', () => {
		const { result, rerender } = setUp(0);

		rerender({ state: 2 });
		expect(result.current).toBe(0);

		rerender({ state: 4 });
		expect(result.current).toBe(2);

		rerender({ state: 6 });
		expect(result.current).toBe(4);
	});

	it('should always return previous state after each update for a "string"', () => {
		const { result, rerender } = setUp('first value');

		rerender({ state: 'second value' });
		expect(result.current).toBe('first value');

		rerender({ state: 'third value' });
		expect(result.current).toBe('second value');

		rerender({ state: 'fourth value' });
		expect(result.current).toBe('third value');
	});

	it('should always return previous state after each update for a "boolean"', () => {
		const { result, rerender } = setUp(true);

		rerender({ state: false });
		expect(result.current).toBe(true);

		rerender({ state: true });
		expect(result.current).toBe(false);
	});

	it('should always return previous state after each update for "null" and "undefined"', () => {
		const { result, rerender } = setUp(null);

		rerender({ state: undefined });
		expect(result.current).toBe(null);

		rerender({ state: null });
		expect(result.current).toBe(undefined);
	});

	it('should always return previous state after each update for an "object (reference)"', () => {
		// all the three have different references
		const FIRST_OBJ = {};
		const SECOND_OBJ = {};
		const THIRD_OBJ = {};

		const { result, rerender } = setUp(FIRST_OBJ);
		// check for referential equality
		expect(result.current).not.toBe(FIRST_OBJ);

		rerender({ state: SECOND_OBJ });
		expect(result.current).not.toBe(SECOND_OBJ);
		expect(result.current).toBe(FIRST_OBJ);

		rerender({ state: THIRD_OBJ });
		expect(result.current).not.toBe(THIRD_OBJ);
		expect(result.current).toBe(SECOND_OBJ);
	});

	it('should always return previous state after each update for an "array (reference)"', () => {
		// all the three have different references
		const FIRST_ARR = [];
		const SECOND_ARR = [];
		const THIRD_ARR = [];

		const { result, rerender } = setUp(FIRST_ARR);
		// check for referential equality
		expect(result.current).not.toBe(FIRST_ARR);

		rerender({ state: SECOND_ARR });
		expect(result.current).not.toBe(SECOND_ARR);
		expect(result.current).toBe(FIRST_ARR);

		rerender({ state: THIRD_ARR });
		expect(result.current).not.toBe(THIRD_ARR);
		expect(result.current).toBe(SECOND_ARR);
	});
});
