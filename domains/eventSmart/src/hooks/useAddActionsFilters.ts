import { useFilterElementProps } from './useFilterElementProps';
import { useFilterElements } from './useFilterElements';
import { useTicketFormSections } from './useTicketFormSections';

const useAddActionsFilters = (): void => {
	useFilterElementProps();
	useFilterElements();
	useTicketFormSections();
};

export default useAddActionsFilters;
