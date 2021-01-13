import { Button } from '@eventespresso/ui-components';
import { TicketTemplatesContainer } from '@eventespresso/ee-components';
import { useDisclosure } from '@eventespresso/hooks';
import { SettingsFilled } from '@eventespresso/icons';

type AddSingleTicketProps = {
	isOnlyButton?: boolean;
};

export const DefaultTicketsButton: React.FC<AddSingleTicketProps> = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button icon={SettingsFilled} onClick={onOpen} />
			<TicketTemplatesContainer isOpen={isOpen} onClose={onClose} />
		</>
	);
};
