import { useTicketsListContext } from '@edtrServices/context';
import type { TicketsListContextProps } from '@edtrServices/context';

const useTicketsListFilterState = (): TicketsListContextProps['filterState'] => {
	return useTicketsListContext().filterState;
};
export default useTicketsListFilterState;
