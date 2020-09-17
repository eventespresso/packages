import React from 'react';
import { useSpring, animated } from 'react-spring';
import { __ } from '@eventespresso/i18n';

import { CompassFilled } from '@eventespresso/icons';
import { getPropsAreEqual } from '@eventespresso/utils';
import { Button, ButtonSize } from '../Button';
import type { ToggleLegendButtonProps } from './types';

const ToggleLegendButton: React.FC<ToggleLegendButtonProps> = ({
	className,
	noHorizontalMargin,
	showLegend,
	toggleLegend,
}) => {
	const iconProps = useSpring({
		display: 'inline-flex',
		transform: `rotate(${showLegend ? 0 : 180}deg)`,
	});

	const icon = () => (
		<animated.div style={iconProps}>
			<CompassFilled />
		</animated.div>
	);

	const tooltip = showLegend ? __('hide legend') : __('show legend');

	return (
		<Button
			active={showLegend}
			buttonSize={ButtonSize.SMALLER}
			className={className}
			icon={icon}
			noHorizontalMargin={noHorizontalMargin}
			onClick={toggleLegend}
		>
			{tooltip}
		</Button>
	);
};

export default React.memo(ToggleLegendButton, getPropsAreEqual(['showLegend'], ['isDisabled']));
