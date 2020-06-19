import { InlineEditProps } from '@eventespresso/adapters';

export interface TextAreaProps extends Omit<InlineEditProps, 'inputType'> {}

export interface TextProps extends Omit<InlineEditProps, 'inputType'> {
	fitText?: boolean;
	tag?: React.ElementType;
}
