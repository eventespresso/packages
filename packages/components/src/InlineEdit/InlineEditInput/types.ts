import { InlineEditProps, InlineEditPreviewProps } from '@eventespresso/adapters';

export interface TextProps extends Omit<InlineEditProps, 'inputType'> {
	lineCount?: number;
	tag?: React.ElementType;
	tooltip?: string;
}

export interface TextareaProps extends Omit<InlineEditProps, 'inputType'> {
	lineCount?: number;
	richTextContent?: boolean;
	tooltip?: string;
}

export interface PreviewProps extends Partial<InlineEditPreviewProps> {
	className?: string;
	lineCount?: number;
	lineLength?: number;
	isEditing?: boolean;
	onRequestEdit?: VoidFunction;
	richTextContent?: boolean;
	tooltip?: string;
}
