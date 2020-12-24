import React from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { Collapsible } from '../../';
import Legend from './Legend';
import ToggleLegendButton from './ToggleLegendButton';
import type { LegendProps } from './types';
import './style.scss';

const CollapsibleLegend: React.FC<LegendProps> = (props) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<div className='ee-collapsible-legend-wrapper'>
			<ToggleLegendButton noHorizontalMargin showLegend={isOpen} toggleLegend={onToggle} />
			<Collapsible show={isOpen}>
				<Legend {...props} />
			</Collapsible>
		</div>
	);
};

export default CollapsibleLegend;
