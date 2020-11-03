import React from 'react';

import useNewDateOptionItems from '@edtrUI/datetimes/hooks/useNewDateOptionItems';
import OptionsModalButton from './OptionsModalButton';

const NewDateButton: React.FC = () => {
	const optionItems = useNewDateOptionItems();

	if (optionItems.length > 1) {
		return <OptionsModalButton />;
	}

	return <>{optionItems}</>;
};

export default NewDateButton;
