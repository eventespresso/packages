import type { Story, Meta } from '@storybook/react/types-6-0';

import { noop } from '../../../utils';
import { AdvancedTextEditor, RichTextEditor, SimpleTextEditor } from './';
import type { RichTextEditorProps } from './RichTextEditor';

export default {
	argTypes: {},
	component: RichTextEditor,
	title: 'Components/RichTextEditor',
} as Meta;

type RTEStory = Story<RichTextEditorProps>;

export const Simple: RTEStory = () => <SimpleTextEditor onChange={noop} />;

export const Advanced: RTEStory = () => <AdvancedTextEditor onChange={noop} toolbar={null} />;
