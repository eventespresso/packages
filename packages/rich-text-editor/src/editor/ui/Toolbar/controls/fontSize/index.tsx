import { useCallback, useEffect, useState } from 'react';
import { toggleCustomInlineStyle, getSelectionCustomInlineStyle } from 'draftjs-utils';

import { FontSizeItems, ToolbarControlProps } from '../../../types';
import { useEditorState } from '../../../../hooks';
import defaultComponent from './Component';

const FontSize: React.FC<ToolbarControlProps<'fontSize'>> = (props) => {
	const [editorState, setEditorState] = useEditorState();
	const [currentFontSize, setCurrentFontSize] = useState(
		editorState ? getSelectionCustomInlineStyle(editorState, ['FONTSIZE']).FONTSIZE : null
	);

	// update currently selected fontSize when cursor position changes
	useEffect(() => {
		const newCurrentFontSize = getSelectionCustomInlineStyle(editorState, ['FONTSIZE']).FONTSIZE;

		setCurrentFontSize(newCurrentFontSize);
	}, [editorState]);

	const toggleFontSize = useCallback(
		(fontSize: FontSizeItems) => {
			const newState = toggleCustomInlineStyle(editorState, 'fontSize', fontSize);
			if (newState) {
				setEditorState(newState);
			}
		},
		[editorState, setEditorState]
	);

	const Component = props.config.component || defaultComponent;
	// strip out "fontsize-" from the value
	const currentValue = currentFontSize && Number(currentFontSize.substring(9));

	return <Component {...props} currentValue={currentValue} onChange={toggleFontSize} />;
};

export default FontSize;
