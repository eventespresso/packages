import classNames from 'classnames';

import Swatch from './Swatch';
import { ColorPickerProps } from './types';
import { PRESET_COLORS } from './constants';

import './swatches.scss';

export const ColorSwatches: React.FC<ColorPickerProps> = ({ color, onChange, ...props }) => {
	const className = classNames('ee-color-swatches', props.className);

	return (
		<div className={className}>
			{PRESET_COLORS.map(({ name, color: presetColor }) => {
				return (
					<Swatch
						color={presetColor}
						isSelected={color === presetColor}
						key={presetColor}
						name={name}
						onSelect={onChange}
					/>
				);
			})}
		</div>
	);
};
