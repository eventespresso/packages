import { useCallback, useEffect, useState } from 'react';
import { toggleCustomInlineStyle, getSelectionCustomInlineStyle } from 'draftjs-utils';

import { FontFamilyItems, ToolbarControlProps } from '../../types';
import { useEditorState } from '../../../../../hooks';
import defaultComponent from './Component';

const FontFamily: React.FC<ToolbarControlProps<'fontFamily'>> = (props) => {
	const [editorState, setEditorState] = useEditorState();
	const [currentFontFamily, setCurrentFontFamily] = useState(
		editorState ? getSelectionCustomInlineStyle(editorState, ['FONTFAMILY']).FONTFAMILY : null
	);

	// update currently selected fontFamily when cursor position changes
	useEffect(() => {
		const newCurrentFontFamily = getSelectionCustomInlineStyle(editorState, ['FONTFAMILY']).FONTFAMILY;

		setCurrentFontFamily(newCurrentFontFamily);
	}, [editorState]);

	const toggleFontFamily = useCallback(
		(fontFamily: FontFamilyItems) => {
			const newState = toggleCustomInlineStyle(editorState, 'fontFamily', fontFamily);
			if (newState) {
				setEditorState(newState);
			}
		},
		[editorState, setEditorState]
	);

	const Component = props.config.component || defaultComponent;
	// strip out "fontfamily-" from the value
	const currentValue = currentFontFamily?.substring(11);

	return <Component {...props} currentValue={currentValue} onChange={toggleFontFamily} />;
};

export default FontFamily;
