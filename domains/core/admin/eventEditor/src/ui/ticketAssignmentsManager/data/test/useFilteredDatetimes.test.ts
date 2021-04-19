import { assocPath } from 'ramda';
import { renderHook, act } from '@testing-library/react-hooks';
import { formatISO } from 'date-fns';

import { actWait } from '@eventespresso/utils/src/test';
import useFilteredDatetimes from '../useFilteredDatetimes';
import { notTrashed } from '@eventespresso/predicates';
import TestWrapper from './TestWrapper';
import { nodes as datetimes } from '@eventespresso/edtr-services/src/apollo/queries/datetimes/test/data';
import { useFilterState } from '../../filters';

const datetimesWithATrashedOne = assocPath([1, 'isTrashed'], true, datetimes);

describe('useFilteredDatetimes', () => {
	it('returns filtered dates for default filter state', async () => {
		const { result } = renderHook(
			() => {
				return useFilteredDatetimes(datetimesWithATrashedOne);
			},
			{ wrapper: TestWrapper({ assignmentType: 'forAll' }) }
		);

		await actWait();

		// by default trashed dates are hidden
		expect(result.current).not.toEqual(datetimesWithATrashedOne);
		expect(result.current).toEqual(notTrashed(datetimesWithATrashedOne));
	});

	it('returns filtered dates when show trashed dates is active', async () => {
		const { result } = renderHook(
			() => {
				return {
					filteredDates: useFilteredDatetimes(datetimesWithATrashedOne),
					filterState: useFilterState(),
				};
			},
			{ wrapper: TestWrapper({ assignmentType: 'forAll' }) }
		);

		await actWait();

		act(() => {
			result.current.filterState.setShowTrashedDates(true);
		});
		// now it should return all the dates
		expect(result.current.filteredDates).toEqual(datetimesWithATrashedOne);
	});

	it('returns filtered dates for a selected month', async () => {
		const datetimesWithTwoDatesInFeb2020 = [
			...datetimesWithATrashedOne,
			{ ...datetimes[0], startDate: formatISO(new Date(2020, 1, 11)) },
			{ ...datetimes[1], startDate: formatISO(new Date(2020, 1, 13)) },
		];
		const { result } = renderHook(
			() => {
				return {
					filteredDates: useFilteredDatetimes(datetimesWithTwoDatesInFeb2020),
					filterState: useFilterState(),
				};
			},
			{ wrapper: TestWrapper({ assignmentType: 'forAll' }) }
		);

		await actWait();

		expect(result.current.filteredDates.length).toEqual(notTrashed(datetimesWithTwoDatesInFeb2020).length);

		act(() => {
			result.current.filterState.setDatesByMonth('2020:1');
		});
		expect(result.current.filteredDates.length).toEqual(2);

		result.current.filteredDates.forEach(({ startDate }) => {
			expect(startDate.startsWith('2020-')).toBe(true);
		});
	});
});
