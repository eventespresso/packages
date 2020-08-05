import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

import { Collapsible } from '../../';
import Legend from './Legend';
import ToggleLegendButton from './ToggleLegendButton';
import type { LegendProps } from './types';

const CollapsibleLegend: React.FC<LegendProps> = ({ direction, legendConfig }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<ToggleLegendButton noHorizontalMargin showLegend={isOpen} toggleLegend={onToggle} />

			<Collapsible show={isOpen}>
				<Legend direction={direction} legendConfig={legendConfig} />
			</Collapsible>
		</>
	);
};

export default CollapsibleLegend;
