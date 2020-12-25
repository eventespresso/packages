import type { Story, Meta } from '@storybook/react/types-6-0';

import { InlineEditInfinity, InlineEditText, InlineEditTextarea } from './';
import type { TextProps, TextareaProps } from './types';

export default {
	component: InlineEditText,
	title: 'Components/InlineEdit/InlineEditInput',
} as Meta;

export const EditableText: Story<TextProps> = () => <InlineEditText />;

export const EditableTextarea: Story<TextareaProps> = () => <InlineEditTextarea />;

export const EditableInfinity: Story<TextProps> = () => <InlineEditInfinity />;
