import { useCallback, useEffect, useMemo, useState } from 'react';
import { toggleCustomInlineStyle, getSelectionCustomInlineStyle } from 'draftjs-utils';

import { ToolbarControlProps } from '../../types';
import { useEditorState } from '../../../../../hooks';
import defaultComponent from './Component';

type ColorType = 'color' | 'bgcolor';
type ColorData = { [key in ColorType]: string };

const ColorPicker: React.FC<ToolbarControlProps<'colorPicker'>> = (props) => {
	const [editorState, setEditorState] = useEditorState();
	const [currentValues, setCurrentValues] = useState<ColorData>({ color: '', bgcolor: '' });

	const setSelectionValues = useCallback(() => {
		const color = getSelectionCustomInlineStyle(editorState, ['COLOR']).COLOR;
		const bgcolor = getSelectionCustomInlineStyle(editorState, ['BGCOLOR']).BGCOLOR;
		setCurrentValues({ color, bgcolor });
	}, [editorState]);

	// update current color details when cursor position changes
	useEffect(() => {
		setSelectionValues();
	}, [setSelectionValues]);

	const setColor = useCallback(
		(type: ColorType, color: string) => {
			const newState = toggleCustomInlineStyle(editorState, type, color);
			if (newState) {
				setEditorState(newState);
			}
		},
		[editorState, setEditorState]
	);

	const currentValue = useMemo(
		() => ({
			// remove "color-"
			color: currentValues?.color?.substring(6),
			bgcolor: currentValues?.bgcolor?.substring(8),
		}),
		[currentValues]
	);

	const Component = props.config.component || defaultComponent;
	return <Component {...props} currentValue={currentValue} onChange={setColor} />;
};

export default ColorPicker;
