import React from 'react';

import { ContextProviders } from '@edtrServices/context';
import { renderDomElement } from '@eventespresso/services';

import REM from './REM';
import '../interfaces/types';
import '../../../../packages/styles/src/themes/default/index.scss'; // to bundle it

const RecurringEventsManager: React.FC = () => (
	<ContextProviders>
		<REM />
	</ContextProviders>
);

const setupREM = (): void => {
	renderDomElement({
		appendToTarget: false,
		domElementToRender: <RecurringEventsManager />,
		containerID: 'ee-recurring-events-manager',
		containerClassName: 'ee-recurring-events-manager-container',
		targetElementID: 'normal-sortables',
	});
};

setupREM();
