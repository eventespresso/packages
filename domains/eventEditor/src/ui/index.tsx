import { ContextProviders } from '@edtrServices/context';
import { renderDomElement } from '@eventespresso/utils';

import EventEditor from './EventEditor';

import '../../../../packages/styles/src/themes/default/index.scss'; // to bundle it.

const Editor: React.FC = () => (
	<ContextProviders>
		<EventEditor />
	</ContextProviders>
);

const setupEditor = (): void => {
	renderDomElement({
		appendToTarget: false,
		domElementToRender: <Editor />,
		containerID: 'ee-event-editor',
		containerClassName: 'ee-editor-container',
		targetElementID: 'normal-sortables',
	});
};

setupEditor();
