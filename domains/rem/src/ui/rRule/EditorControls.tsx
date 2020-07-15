import React from 'react';

import { EditorControlsProps } from './types';

const EditorControls: React.FC<EditorControlsProps> = ({ resetLabel, onReset }) => {
	return (
		<button id={'rem-cancel-button'} className={'button button-secondary'} onClick={onReset}>
			{resetLabel}
		</button>
	);
};

export default EditorControls;
