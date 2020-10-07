import { act, renderHook } from '@testing-library/react-hooks';

import useEntityListFilterStateManager from '../useEntityListFilterStateManager';

const EMPTY_VALUES = [null, undefined];

describe('useEntityListFilterStateManager', () => {
	it('checks types for state values', () => {
		const { result } = renderHook(() => useEntityListFilterStateManager('id'));

		expect(typeof result.current.perPage).toBe('number');
		expect(typeof result.current.pageNumber).toBe('number');
		expect(typeof result.current.searchText).toBe('string');
		expect(typeof result.current.sortBy).toBe('string');
		expect(typeof result.current.sortingEnabled).toBe('boolean');
		expect(typeof result.current.view).toBe('string');
	});

	it('checks for the default filter state', () => {
		const { result } = renderHook(() => useEntityListFilterStateManager('id'));

		expect(result.current.perPage).toBe(6);
		expect(result.current.pageNumber).toBe(1);
		expect(result.current.total).toBe(null);
		expect(result.current.searchText).toBe('');
		expect(result.current.sortBy).toBe('id');
		expect(result.current.sortingEnabled).toBe(false);
		expect(result.current.view).toBe('card');
	});

	test('checks for updated filter state', () => {
		const { result } = renderHook(() => useEntityListFilterStateManager('id'));

		// before the update
		expect(result.current.perPage).toBe(6);
		expect(result.current.pageNumber).toBe(1);
		act(() => {
			result.current.setPerPage(2, 8);
		});
		// after the update
		expect(result.current.perPage).toBe(8);
		expect(result.current.pageNumber).toBe(2);

		// edge cases
		[...EMPTY_VALUES, 0].forEach((value) => {
			act(() => {
				result.current.setPerPage(value, value);
			});
			expect(result.current.perPage).toBe(value);
			expect(result.current.pageNumber).toBe(2); // remains unchanged
		});

		// before the update
		expect(result.current.sortBy).toBe('id');
		act(() => {
			result.current.setSortBy('name');
		});
		// after the update
		expect(result.current.sortBy).toBe('name');

		// edge cases
		[...EMPTY_VALUES, ''].forEach((value) => {
			act(() => {
				result.current.setSortBy(value);
			});
			expect(result.current.sortBy).toBe(value);
		});

		// before the update
		expect(result.current.pageNumber).toBe(2);
		act(() => {
			result.current.setPageNumber(3);
		});
		// after the update
		expect(result.current.pageNumber).toBe(3);

		// edge cases
		[...EMPTY_VALUES, 0, 100].forEach((value) => {
			act(() => {
				result.current.setPageNumber(value);
			});
			expect(result.current.pageNumber).toBe(value);
		});

		// before the update
		expect(result.current.total).toBe(null);
		act(() => {
			result.current.setTotal(100);
		});
		// after the update
		expect(result.current.total).toBe(100);

		// edge cases
		[...EMPTY_VALUES, 0, 9999999999].forEach((value) => {
			act(() => {
				result.current.setTotal(value);
			});
			expect(result.current.total).toBe(value);
		});

		// before the update
		expect(result.current.searchText).toBe('');
		act(() => {
			result.current.setSearchText('some query');
		});
		// after the update
		expect(result.current.searchText).toBe('some query');

		// edge cases
		[...EMPTY_VALUES, ''].forEach((value) => {
			act(() => {
				result.current.setSearchText(value);
			});
			expect(result.current.searchText).toBe(value);
		});

		// before the update
		expect(result.current.view).toBe('card');
		act(() => {
			result.current.setTableView();
		});
		// after the update
		expect(result.current.view).toBe('table');

		// Now lets switch to card view again
		act(() => {
			result.current.setCardView();
		});
		// after the update
		expect(result.current.view).toBe('card');

		// before the update
		expect(result.current.sortingEnabled).toBe(false);
		act(() => {
			result.current.toggleSorting();
		});
		// after the update
		expect(result.current.sortingEnabled).toBe(true);
		// lets disable sorting
		act(() => {
			result.current.toggleSorting();
		});
		expect(result.current.sortingEnabled).toBe(false);
	});
});
