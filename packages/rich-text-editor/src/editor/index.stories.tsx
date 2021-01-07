import type { Story, Meta } from '@storybook/react/types-6-0';

import { noop } from '../../../utils';
import { RichTextEditor, RichTextEditorProps } from './ui';

export default {
	argTypes: {},
	component: RichTextEditor,
	title: 'Components/RichTextEditor',
} as Meta;

type RTEStory = Story<RichTextEditorProps>;

export const NewRTE: RTEStory = () => <RichTextEditor type='advanced' onChange={noop} />;
