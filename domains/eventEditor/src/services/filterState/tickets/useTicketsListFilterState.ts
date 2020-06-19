import { TicketsListContextProps, useTicketsListContext } from '@edtrServices/context';

const useTicketsListFilterState = (): TicketsListContextProps['filterState'] => {
	return useTicketsListContext().filterState;
};
export default useTicketsListFilterState;
