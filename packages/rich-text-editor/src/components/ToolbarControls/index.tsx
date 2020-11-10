import React from 'react';

import BlockStyleControls from './BlockStyleControls';
import HeadingControls from './HeadingControls';
import InlineStyleControls from './InlineStyleControls';

import type { ToolbarControlsProps } from './types';

import './style.scss';
import { useUrlInputState } from '../../hooks';
import UrlInput from './UrlInput';
import LinkControl from './LinkControl';

const ToolbarControls: React.FC<ToolbarControlsProps> = ({ editorRef, type = 'simple' }) => {
	const { inputRef, urlValue, setUrlValue, isVisible, setIsVisible } = useUrlInputState();

	return (
		<>
			<div className='ee-rich-text-editor-controls__wrapper'>
				<HeadingControls />
				<BlockStyleControls />
				<InlineStyleControls />
				{type === 'advanced' && (
					<>
						<LinkControl inputRef={inputRef} setUrlValue={setUrlValue} setIsVisible={setIsVisible} />
					</>
				)}
			</div>
			{isVisible && (
				<UrlInput
					editorRef={editorRef}
					inputRef={inputRef}
					setIsVisible={setIsVisible}
					setUrlValue={setUrlValue}
					urlValue={urlValue}
				/>
			)}
		</>
	);
};

export default ToolbarControls;
