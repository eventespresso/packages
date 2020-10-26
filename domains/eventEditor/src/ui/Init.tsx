import React from 'react';

import { Spinner } from '@eventespresso/adapters';
import { initToaster } from '@eventespresso/toaster';
import { useEditorInitialization } from '../hooks';

const Init: React.FC = () => {
	initToaster();

	useEditorInitialization();

	return <Spinner />;
};

export default Init;
