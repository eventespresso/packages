import React from 'react';
import { __ } from '@eventespresso/i18n';

import { NewEntityModal } from '@eventespresso/components';
import useNewDateOptionItems from '@edtrUI/datetimes/hooks/useNewDateOptionItems';
import { useGlobalModal } from '@eventespresso/registry';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

const OptionsModal: React.FC = () => {
	const optionItems = useNewDateOptionItems();
	const { isOpen, close } = useGlobalModal(EdtrGlobalModals.NEW_DATE_MODAL);

	return (
		isOpen && (
			<NewEntityModal isOpen={true} onClose={close} title={__('Add New Date')}>
				{optionItems}
			</NewEntityModal>
		)
	);
};

export default OptionsModal;
