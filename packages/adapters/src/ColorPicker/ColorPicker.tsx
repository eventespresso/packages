import { HexColorPicker } from 'react-colorful';
import classNames from 'classnames';
import 'react-colorful/dist/index.css';

import { ColorPickerProps } from './types';

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange, ...props }) => {
	const className = classNames('ee-color-picker', props.className);

	return <HexColorPicker className={className} color={color} onChange={onChange} />;
};
