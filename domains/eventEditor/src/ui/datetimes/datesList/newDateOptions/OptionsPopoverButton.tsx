import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Button, ButtonSize } from '@eventespresso/components';
import { useGlobalModal } from '@eventespresso/registry';
import { Calendar } from '@eventespresso/icons';
import { EdtrGlobalModals } from '@eventespresso/edtr-services';

const OptionsPopoverButton: React.FC = () => {
	const { open } = useGlobalModal(EdtrGlobalModals.NEW_DATE_POPOVER);
	return <Button buttonSize={ButtonSize.BIG} buttonText={__('Add New Date')} icon={Calendar} mr={2} onClick={open} />;
};

export default OptionsPopoverButton;
