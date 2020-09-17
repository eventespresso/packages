import React from 'react';
import { __ } from '@eventespresso/i18n';

import { AttendeesEditProps } from '../types';
import RegStatusControl from '@blocksComponents/RegStatusControl';

const SelectStatus: React.FC<AttendeesEditProps> = ({ attributes, setAttributes }) => {
	const { status } = attributes;

	return (
		<RegStatusControl
			label={__('Select Registration Status')}
			status={status}
			setStatus={(status): void => setAttributes({ status })}
		/>
	);
};

export default SelectStatus;
