import React from 'react';

import { renderDomElement } from '@eventespresso/services';
import { withEdtrContext } from '@eventespresso/edtr-services';

import '../interfaces/types';
import REM from './REM';

const WrappedREM = withEdtrContext(REM);

renderDomElement({
	appendToTarget: false,
	domElementToRender: <WrappedREM />,
	containerID: 'ee-rem',
	targetElementID: 'wpfooter',
});
