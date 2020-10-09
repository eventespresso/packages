import type React from 'react';
import type { EditableProps as ChakraEditableProps } from '@chakra-ui/core';

import type { CommonInputProps } from '../types';

export type InputType = 'heading' | 'number' | 'textarea' | 'text';

export interface InlineEditProps extends Partial<ChakraEditableProps>, CommonInputProps<HTMLInputElement> {
	inputType?: InputType;
	lineCount?: number;
	Preview?: React.ComponentType<InlineEditPreviewProps>;
}

export interface InlineEditPreviewProps
	extends Partial<Omit<InlineEditProps, 'onCancel' | 'onChange' | 'onChangeValue' | 'onEdit' | 'onSubmit'>> {
	fitText?: boolean;
	isEditing?: boolean;
	onRequestEdit?: VoidFunction;
	value?: string;
}

export interface InlineEditInputProps extends Pick<InlineEditProps, 'inputType'> {
	onCancel: VoidFunction;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}
