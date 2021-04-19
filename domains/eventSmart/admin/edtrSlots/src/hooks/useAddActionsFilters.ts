import { useFilterElementProps } from './useFilterElementProps';
import { useFilterFormFields } from './useFilterFormFields';

const useAddActionsFilters = (): void => {
	useFilterElementProps();
	useFilterFormFields();
};

export default useAddActionsFilters;
