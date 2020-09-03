import { InlineEditProps, InlineEditPreviewProps } from '@eventespresso/adapters';

export interface TextAreaProps extends Omit<InlineEditProps, 'inputType'> {
	lineCount?: number;
	richTextContent?: boolean;
	tooltip?: string;
}

export interface TextProps extends Omit<InlineEditProps, 'inputType'> {
	lineCount?: number;
	fitText?: boolean;
	tag?: React.ElementType;
	tooltip?: string;
}

export interface PreviewProps extends Partial<InlineEditPreviewProps> {
	className?: string;
	lineCount?: number;
	lineLength?: number;
	fitText?: boolean;
	isEditing?: boolean;
	onRequestEdit?: VoidFunction;
	richTextContent?: boolean;
	tooltip?: string;
}
