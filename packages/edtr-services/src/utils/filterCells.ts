import { DisplayStartOrEndDate } from '../filterState';
import type { Cell } from '@eventespresso/ui-components';

export const filterCellByStartOrEndDate = (displayStartOrEndDate: DisplayStartOrEndDate) => (cell: Cell): boolean => {
	if (displayStartOrEndDate === DisplayStartOrEndDate.start && cell.key === 'end') {
		return false;
	}

	if (displayStartOrEndDate === DisplayStartOrEndDate.end && cell.key === 'start') {
		return false;
	}

	return true;
};
