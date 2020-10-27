import React from 'react';
import { EditableInput as ChakraEditableInput } from '@chakra-ui/core';

import { isEnterKey, isEscapeKey } from '@eventespresso/utils';
import type { PseudoBoxProps } from '@chakra-ui/core';
import type { InlineEditInputProps } from './types';

/**
 * Inserts substring into a string at a given position.
 */
const insertStrAt = (str: string, subStr: string, pos: number): string => {
	return `${str.slice(0, pos)}${subStr}${str.slice(pos)}`;
};

const InlineEditInput: React.FC<InlineEditInputProps> = ({ inputType, onCancel, setValue }) => {
	const className = 'ee-input-base ee-input ee-inline-edit--editing';

	if (inputType === 'textarea') {
		// Since Chakra has no editable textarea yet
		// we will use this hack
		const textareaProps: PseudoBoxProps = {
			as: 'textarea',
			className: 'ee-input-base ee-textarea ee-inline-edit--editing',
			// pass our own onKeyDown handler for a11y
			onKeyDown: (e: React.KeyboardEvent) => {
				if (isEnterKey(e)) {
					const cursorPosition = (e.target as HTMLInputElement).selectionStart;
					// prevent submit
					e.preventDefault();

					// insert newline at the current cursor position
					setValue((v) => insertStrAt(v, `\n`, cursorPosition));
				} else if (isEscapeKey(e)) {
					onCancel();
				}
			},
		};

		// @ts-ignore
		return <ChakraEditableInput {...textareaProps} variant='unstyled' />;
	}

	// @ts-ignore
	return <ChakraEditableInput className={className} type={inputType} variant='unstyled' />;
};

export default InlineEditInput;
