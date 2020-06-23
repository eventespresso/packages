import React from 'react';

import { ContextProviders } from '@edtrServices/context';
import { renderDomElement } from '@eventespresso/services';

import '../interfaces/types';
import EventEditor from './EventEditor';

import '@eventespresso/styles/src/themes/default/index.scss';

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
