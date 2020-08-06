import { InlineEditProps } from '@eventespresso/adapters';

export interface TextAreaProps extends Omit<InlineEditProps, 'inputType'> {
	tooltip?: string;
}

export interface TextProps extends Omit<InlineEditProps, 'inputType'> {
	lineCount?: number;
	fitText?: boolean;
	tag?: React.ElementType;
	tooltip?: string;
}

export interface TabbableTextProps {
	className?: string;
	icon?: React.ReactNode;
	onRequestEdit: VoidFunction;
	text?: string | JSX.Element;
	tooltip?: string;
}

export interface PreviewProps extends Partial<Omit<InlineEditProps, 'onChange' | 'onChangeValue'>> {
	lineCount?: number;
	lineLength?: number;
	fitText?: boolean;
	isEditing?: boolean;
	onRequestEdit?: VoidFunction;
	tooltip?: string;
}
