import { useCallback, useMemo } from 'react';
import classNames from 'classnames';

import { sprintf, __ } from '@eventespresso/i18n';

import { SwatchProps } from './types';

const Swatch: React.FC<SwatchProps> = ({ color, onSelect, isSelected, name, ...props }) => {
	const className = classNames('ee-color-swatches__swatch', props.className, { 'is-selected': isSelected });

	const style = useMemo(() => ({ background: color }), [color]);

	const onClick = useCallback(() => onSelect(color), [onSelect, color]);

	const ariaLabel = sprintf(/* translators: color name */ __('Color: %s'), name);

	return (
		<button
			{...props}
			aria-label={ariaLabel}
			aria-pressed={isSelected}
			className={className}
			style={style}
			onClick={onClick}
		/>
	);
};

export default Swatch;
