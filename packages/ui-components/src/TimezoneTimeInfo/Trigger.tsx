import React, { forwardRef } from 'react';

import { GlobalOutlined } from '@eventespresso/icons';
import type { TooltipProps } from '@eventespresso/adapters';

import { IconButton } from '../../';

interface TriggerProps {
	tooltip: string;
	onClick?: VoidFunction;
}

const Icon: React.FC = () => <GlobalOutlined size='smaller' />;

const tooltipProps: TooltipProps = { placement: 'top' as const };

const Trigger = forwardRef<typeof IconButton, TriggerProps>(({ tooltip, ...props }, ref) => {
	return (
		<IconButton
			{...props}
			borderless
			className='ee-timezone-info__button'
			icon={Icon}
			tooltip={tooltip}
			tooltipProps={tooltipProps}
			ref={ref}
		/>
	);
});

export default Trigger;
