import { DatetimesListContextProps, useDatesListContext } from '@edtrServices/context';

const useDatesListFilterState = (): DatetimesListContextProps['filterState'] => {
	return useDatesListContext().filterState;
};
export default useDatesListFilterState;
