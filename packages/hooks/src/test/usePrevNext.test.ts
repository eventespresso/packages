import { renderHook, act } from '@testing-library/react-hooks';

import { usePrevNext } from '../usePrevNext';

describe('usePrevNext', () => {
	it('should return the default initial index', () => {
		const { result } = renderHook(() => usePrevNext());

		expect(result.current.current).toBe(0);
	});

	it('should return the passed initial index', () => {
		const { result } = renderHook(() => usePrevNext(10));

		expect(result.current.current).toBe(10);
	});

	it('increments the default index by using next()', () => {
		const { result } = renderHook(() => usePrevNext());

		act(() => {
			result.current.next();
		});
		expect(result.current.current).toBe(1);

		act(() => {
			result.current.next();
		});
		expect(result.current.current).toBe(2);

		act(() => {
			result.current.next();
		});
		expect(result.current.current).toBe(3);
	});

	it('increments the passed index by using next()', () => {
		const { result } = renderHook(() => usePrevNext(8));

		expect(result.current.current).toBe(8);
		act(() => {
			result.current.next();
		});
		expect(result.current.current).toBe(9);

		act(() => {
			result.current.next();
		});
		expect(result.current.current).toBe(10);
	});

	it('deccrements the default index by using prev()', () => {
		const { result } = renderHook(() => usePrevNext());

		act(() => {
			result.current.next();
		});
		expect(result.current.current).toBe(1);

		act(() => {
			result.current.prev();
		});
		expect(result.current.current).toBe(0);

		act(() => {
			result.current.prev();
		});
		expect(result.current.current).toBe(-1);

		act(() => {
			result.current.prev();
		});
		expect(result.current.current).toBe(-2);
	});

	it('deccrements the passed index by using prev()', () => {
		const { result } = renderHook(() => usePrevNext(13));

		expect(result.current.current).toBe(13);
		act(() => {
			result.current.prev();
		});
		expect(result.current.current).toBe(12);

		act(() => {
			result.current.prev();
		});
		expect(result.current.current).toBe(11);
	});

	it('sets the index to the value passed via goto()', () => {
		const { result } = renderHook(() => usePrevNext());

		expect(result.current.current).toBe(0);
		act(() => {
			result.current.goto(15);
		});
		expect(result.current.current).toBe(15);

		act(() => {
			result.current.goto(-12);
		});
		expect(result.current.current).toBe(-12);
	});

	it('resets the index to the default initial value', () => {
		const { result } = renderHook(() => usePrevNext());

		act(() => {
			result.current.goto(52);
		});
		expect(result.current.current).toBe(52);

		act(() => {
			result.current.reset();
		});
		expect(result.current.current).toBe(0);
	});

	it('resets the index to the passed initial value', () => {
		const { result } = renderHook(() => usePrevNext(46));

		expect(result.current.current).toBe(46);

		act(() => {
			result.current.next();
		});
		expect(result.current.current).toBe(47);

		act(() => {
			result.current.goto(82);
		});
		expect(result.current.current).toBe(82);

		act(() => {
			result.current.prev();
		});
		expect(result.current.current).toBe(81);

		act(() => {
			result.current.reset();
		});
		expect(result.current.current).toBe(46);
	});
});
