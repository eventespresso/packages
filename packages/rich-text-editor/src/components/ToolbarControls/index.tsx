import React from 'react';
import classNames from 'classnames';

import BlockStyleControls from './BlockStyleControls';
import HeadingControls from './HeadingControls';
import InlineStyleControls from './InlineStyleControls';

import type { ToolbarControlsProps } from './types';

import './style.scss';

const ToolbarControls: React.FC<ToolbarControlsProps> = ({ type = 'simple' }) => {
	const className = classNames('rich-text-editor-controls__wrapper', type);

	return (
		<div className={className}>
			<HeadingControls />
			<BlockStyleControls />
			<InlineStyleControls />
			{type === 'advanced' && <>{/* something cool here */}</>}
		</div>
	);
};

export default ToolbarControls;
