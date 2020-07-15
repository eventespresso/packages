import React from 'react';
import classNames from 'classnames';

import { InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/core';

import type { InputWithLabelProps } from './types';

const InputWithLabel: React.FC<InputWithLabelProps> = ({ children, leftLabel, rightLabel, ...props }) => {
	const className = classNames(
		props.className,
		leftLabel && 'ee-input-with-label__left-label',
		rightLabel && 'ee-input-with-label__right-label'
	);

	return (
		<InputGroup className={className}>
			{leftLabel && <InputLeftAddon className='ee-input-with-label__left-addon'>{leftLabel}</InputLeftAddon>}

			{children}

			{rightLabel && <InputRightAddon className='ee-input-with-label__right-addon'>{rightLabel}</InputRightAddon>}
		</InputGroup>
	);
};

export default InputWithLabel;
