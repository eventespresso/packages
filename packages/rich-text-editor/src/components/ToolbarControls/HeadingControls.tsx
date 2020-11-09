import React from 'react';
import { __ } from '@eventespresso/i18n';

import { Select } from '../../../../components/src/Select';
import { useBlockType, useToggleBlockType } from '../../hooks';
import { HEADING_BLOCK_TYPES } from '../constants';

const rootProps = {
	className: 'rich-text-editor-controls__heading',
};

const HeadingControls: React.FC = () => {
	const blockType = useBlockType();

	const onToggle = useToggleBlockType();

	return (
		<Select
			aria-label={__('heading selector')}
			className='ee-input-base ee-select'
			onChangeValue={onToggle}
			options={HEADING_BLOCK_TYPES}
			rootProps={rootProps}
			value={blockType}
		/>
	);
};

export default HeadingControls;
