import React from 'react';
import { useSpring, animated } from 'react-spring';
import { __ } from '@wordpress/i18n';

import { CompassFilled } from '@eventespresso/icons';
import { getPropsAreEqual } from '@eventespresso/services';
import { Button } from '../Button';
import type { ToggleLegendButtonProps } from './types';

const ToggleLegendButton: React.FC<ToggleLegendButtonProps> = ({ className, showLegend, toggleLegend }) => {
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
		<Button active={showLegend} className={className} icon={icon} onClick={toggleLegend}>
			{tooltip}
		</Button>
	);
};

export default React.memo(ToggleLegendButton, getPropsAreEqual(['showLegend'], ['isDisabled']));
