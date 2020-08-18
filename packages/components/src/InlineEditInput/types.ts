import { InlineEditProps } from '@eventespresso/adapters';

export interface TextAreaProps extends Omit<InlineEditProps, 'inputType'> {
	richTextContent?: boolean;
	tooltip?: string;
}

export interface TextProps extends Omit<InlineEditProps, 'inputType'> {
	lineCount?: number;
	fitText?: boolean;
	tag?: React.ElementType;
	tooltip?: string;
}

export interface PreviewProps extends Partial<Omit<InlineEditProps, 'onChange' | 'onChangeValue'>> {
	lineCount?: number;
	lineLength?: number;
	fitText?: boolean;
	isEditing?: boolean;
	onRequestEdit?: VoidFunction;
	richTextContent?: boolean;
	tooltip?: string;
}
