import React from 'react';
import { initToaster } from '@eventespresso/toaster';
import { useEditorInitialization } from '../hooks';

initToaster();

const Init: React.FC = () => {
	useEditorInitialization();
	return null;
};

export default Init;
