import { __ } from '@eventespresso/i18n';

import { NewEntityModal } from '@eventespresso/ui-components';
import { useGlobalModal } from '@eventespresso/registry';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

const NewDateModal: React.FC = () => {
	const { isOpen, close, getData } = useGlobalModal(EdtrGlobalModals.NEW_DATE);

	return (
		isOpen && (
			<NewEntityModal isOpen={true} onClose={close} title={__('Add New Date')}>
				{getData().children}
			</NewEntityModal>
		)
	);
};

export default NewDateModal;
