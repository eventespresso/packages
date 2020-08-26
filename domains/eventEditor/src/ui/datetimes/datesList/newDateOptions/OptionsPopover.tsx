import React from 'react';
import { __ } from '@wordpress/i18n';

import { NewEntityPopover } from '@eventespresso/components';
import useNewDateOptionItems from '@edtrUI/datetimes/hooks/useNewDateOptionItems';
import { useGlobalModal } from '@eventespresso/registry';

const OptionsPopover: React.FC = () => {
	const optionItems = useNewDateOptionItems();
	const { isOpen, close } = useGlobalModal('newDatePopover');
	return isOpen ? (
		<NewEntityPopover isOpen={true} onClose={close} title={__('Add New Date')}>
			{optionItems}
		</NewEntityPopover>
	) : null;
};

export default OptionsPopover;
