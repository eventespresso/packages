import React from 'react';

import useNewDateOptionItems from '@edtrUI/datetimes/hooks/useNewDateOptionItems';
import OptionsPopoverButton from './OptionsPopoverButton';

const NewDateButton: React.FC = () => {
	const optionItems = useNewDateOptionItems();
	if (optionItems.length > 1) {
		return <OptionsPopoverButton />;
	}
	return <>{optionItems}</>;
};

export default NewDateButton;
