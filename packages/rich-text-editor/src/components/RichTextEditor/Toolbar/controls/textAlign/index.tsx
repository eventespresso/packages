import { useCallback, useEffect, useState } from 'react';
import { getSelectedBlocksMetadata, setBlockData } from 'draftjs-utils';

import { TextAlignItems, ToolbarControlProps } from '../../types';
import { useEditorState } from '../../../../../hooks';
import defaultComponent from './Component';

const TextAlign: React.FC<ToolbarControlProps<'textAlign'>> = (props) => {
	const [editorState, setEditorState] = useEditorState();
	const [currentTextAlignment, setCurrentTextAlignment] = useState();

	// update currently selected block when cursor position changes
	useEffect(() => {
		const newCurrentTextAlignment = getSelectedBlocksMetadata(editorState).get('text-align');

		setCurrentTextAlignment(newCurrentTextAlignment);
	}, [editorState]);

	const onChange = useCallback(
		(value: TextAlignItems) => {
			if (currentTextAlignment !== value) {
				setEditorState(setBlockData(editorState, { 'text-align': value }));
			} else {
				setEditorState(setBlockData(editorState, { 'text-align': undefined }));
			}
		},
		[currentTextAlignment, editorState, setEditorState]
	);

	const Component = props.config.component || defaultComponent;

	return <Component {...props} currentValue={currentTextAlignment} onChange={onChange} />;
};

export default TextAlign;
