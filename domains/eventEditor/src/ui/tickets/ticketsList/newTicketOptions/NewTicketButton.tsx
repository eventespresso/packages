import useNewTicketOptionItems from '@edtrUI/tickets/hooks/useNewTicketOptionItems';
import OptionsModal from './OptionsModal';

const NewTicketButton: React.FC = () => {
	const optionItems = useNewTicketOptionItems();

	if (optionItems.length > 1) {
		return <OptionsModal>{optionItems}</OptionsModal>;
	}

	return <>{optionItems}</>;
};

export default NewTicketButton;
