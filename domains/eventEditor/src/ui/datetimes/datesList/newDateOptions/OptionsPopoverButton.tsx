import React from 'react';
import { __ } from '@wordpress/i18n';

import { Button, ButtonSize } from '@eventespresso/components';
import { useGlobalModal } from '@eventespresso/registry';
import { Calendar } from '@eventespresso/icons';

const OptionsPopover: React.FC = () => {
	const { open } = useGlobalModal('newDatePopover');
	return <Button buttonSize={ButtonSize.BIG} buttonText={__('Add New Date')} icon={Calendar} mr={2} onClick={open} />;
};

export default OptionsPopover;
