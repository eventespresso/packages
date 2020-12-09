import useTicketFormInitialValues from './useTicketFormInitialValues';
import useTicketFormSections from './useTicketFormSections';
import useTicketMutationAction from './useTicketMutationAction';
import useTicketUpdateInput from './useTicketUpdateInput';

const useAddActionsFilters = (): void => {
	useTicketFormInitialValues();

	useTicketFormSections();

	useTicketUpdateInput();

	useTicketMutationAction();
};

export default useAddActionsFilters;
