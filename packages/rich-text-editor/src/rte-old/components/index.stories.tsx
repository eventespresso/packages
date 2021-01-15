import type { Story, Meta } from '@storybook/react/types-6-0';

import { AdvancedTextEditor, RichTextEditor, SimpleTextEditor } from './';
import type { RichTextEditorProps } from './RichTextEditor';

export default {
	argTypes: {},
	component: RichTextEditor,
	title: 'Components/RichTextEditor',
} as Meta;

type RTEStory = Story<RichTextEditorProps>;

export const Simple: RTEStory = () => <SimpleTextEditor onChange={console.log} />;

export const Advanced: RTEStory = () => <AdvancedTextEditor onChange={console.log} />;
