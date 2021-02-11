import type React from 'react';
import type { EditableProps as ChakraEditableProps } from '@chakra-ui/react';

import type { CommonInputProps } from '../types';

export type InputType = 'heading' | 'number' | 'textarea' | 'text';

export interface InlineEditProps
	extends Partial<ChakraEditableProps>,
		Omit<CommonInputProps<HTMLInputElement>, 'onChangeValue'> {
	editableInputClassName?: string;
	'data-testid'?: string;
	inputClassName?: string;
	inputType?: InputType;
	lineCount?: number;
	Preview?: React.ComponentType<InlineEditPreviewProps>;
	previewClassName?: string;
	textAreaClassName?: string;
}

export interface InlineEditPreviewProps
	extends Partial<Omit<InlineEditProps, 'onCancel' | 'onChange' | 'onChangeValue' | 'onEdit' | 'onSubmit'>> {
	isEditing?: boolean;
	onRequestEdit?: VoidFunction;
	value?: string;
}

export interface InlineEditInputProps
	extends Pick<InlineEditProps, 'editableInputClassName' | 'inputType' | 'textAreaClassName'> {
	'data-testid'?: string;
	onCancel: VoidFunction;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}
