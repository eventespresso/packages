import { EntityEditModal } from '@eventespresso/ui-components';
import { __, sprintf } from '@eventespresso/i18n';
import { usePrevNext } from '@eventespresso/hooks';
import { useIsPristine } from '@eventespresso/form';

import ModalBody from './ModalBody';

import type { ContextProviderProps } from './types';
import FooterButtons from './FooterButtons';
import { useDataState } from '../data';

const Modal: React.FC<ContextProviderProps> = ({ onClose, ...props }) => {
	const steps = usePrevNext();
	const isPristine = useIsPristine();
	const { tickets } = useDataState();

	const ticketId = props.form.getState().values?.id;

	const title = tickets[ticketId]?.dbId
		? sprintf(
				/* translators: %s ticket id */
				__('Edit ticket %s'),
				`#${tickets[ticketId].dbId}`
		  )
		: __('New Ticket Details');

	const footerButtons = <FooterButtons steps={steps} />;

	return (
		<EntityEditModal
			isOpen={true}
			footerContent={footerButtons}
			onClose={onClose}
			showAlertOnClose={!isPristine}
			title={title}
		>
			<ModalBody {...props} steps={steps} />
		</EntityEditModal>
	);
};

export default Modal;
