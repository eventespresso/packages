import { useFilterElementProps } from './useFilterElementProps';
import { useFilterElements } from './useFilterElements';
import { useFilterFormFields } from './useFilterFormFields';

const useAddActionsFilters = (): void => {
	useFilterElementProps();
	useFilterElements();
	useFilterFormFields();
};

export default useAddActionsFilters;
