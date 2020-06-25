import { useDatesListContext } from '@edtrServices/context';
import type { DatetimesListContextProps } from '@edtrServices/context';

const useDatesListFilterState = (): DatetimesListContextProps['filterState'] => {
	return useDatesListContext().filterState;
};
export default useDatesListFilterState;
