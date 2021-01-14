import { useCallback, useMemo } from 'react';
import classNames from 'classnames';

import { sprintf, __ } from '@eventespresso/i18n';
import { Button } from '../Button';

import { SwatchProps } from './types';

const Swatch: React.FC<SwatchProps> = ({ color, onSelect, isSelected, name, ...props }) => {
	const className = classNames(
		'ee-color-swatches__swatch',
		isSelected && 'ee-color-swatches__swatch--is-selected',
		props.className
	);

	const style = useMemo(() => ({ background: color }), [color]);

	const onClick = useCallback(() => onSelect(color), [onSelect, color]);

	const ariaLabel = sprintf(/* translators: color name */ __('Color: %s'), name);

	return (
		<Button
			{...props}
			aria-label={ariaLabel}
			aria-pressed={isSelected}
			className={className}
			onClick={onClick}
			style={style}
		/>
	);
};

export default Swatch;
