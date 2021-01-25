import type { Story, Meta } from '@storybook/react/types-6-0';

import { AdvancedTextEditor, RichTextEditor, SimpleTextEditor } from './';
import type { RichTextEditorProps } from './RichTextEditor';

export default {
	argTypes: {},
	component: RichTextEditor,
	title: 'Components/RichTextEditor_Exp',
} as Meta;

type RTEStory = Story<RichTextEditorProps>;

export const Simple: RTEStory = () => <SimpleTextEditor onChange={console.log} />;

const html =
	'<p>This is some <strong>bold</strong> text, this <strong><em>bold and italic</em></strong>, <em><ins>italic underline</ins></em>, <span style="color: red;">red</span>, <span style="color: red;background-color: green;">red with green</span> bg, <code>code</code></p><img src="https://cdn.eventespresso.com/wp-content/uploads/2019/04/24111628/event-gantt-chart-768x510.jpg" alt="Easy Tool" style="height: 510px;width: 768px"/>';

export const Advanced: RTEStory = () => (
	<AdvancedTextEditor defaultValue={html} onChange={console.log} toolbar={null} />
);
