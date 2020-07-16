import React from 'react';

import useNewDateOptionItems from '@edtrUI/datetimes/hooks/useNewDateOptionItems';
import OptionsPopover from './OptionsPopover';

const NewDateButton: React.FC = () => {
	const optionItems = useNewDateOptionItems();
	if (optionItems.length > 1) {
		return <OptionsPopover>{optionItems}</OptionsPopover>;
	}
	return <>{optionItems}</>;
};

export default NewDateButton;
