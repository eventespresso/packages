import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button } from '@eventespresso/components';
import { useGlobalModal } from '@eventespresso/registry';
import { Calendar } from '@eventespresso/icons';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

const OptionsModalButton: React.FC = () => {
	const { open } = useGlobalModal(EdtrGlobalModals.NEW_DATE);
	return <Button buttonText={__('Add New Date')} icon={Calendar} mr={2} onClick={open} size='big' />;
};

export default OptionsModalButton;
