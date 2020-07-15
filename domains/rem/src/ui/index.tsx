import React from 'react';

import { renderDomElement } from '@eventespresso/services';

import REM from './REM';

renderDomElement({
	appendToTarget: false,
	domElementToRender: <REM />,
	containerID: 'ee-rem',
	targetElementID: 'wpfooter',
});
