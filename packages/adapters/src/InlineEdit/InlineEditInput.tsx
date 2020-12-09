import React, { useMemo } from 'react';
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

const InlineEditInput: React.FC<InlineEditInputProps> = ({
	editableInputClassName,
	inputType,
	onCancel,
	setValue,
	textAreaClassName,
}) => {
	const textareaProps: PseudoBoxProps = useMemo(
		() => ({
			as: 'textarea',
			className: textAreaClassName,
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
		}),
		[onCancel, setValue, textAreaClassName]
	);

	if (inputType === 'textarea') {
		return <ChakraEditableInput {...textareaProps} />;
	}

	return <ChakraEditableInput className={editableInputClassName} />;
};

export default InlineEditInput;
