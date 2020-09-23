import React, { forwardRef } from 'react';

import { GlobalOutlined } from '@eventespresso/icons';
import type { TooltipProps } from '@eventespresso/adapters';
import { useMemoStringify } from '@eventespresso/hooks';

import { IconButton } from '../../';

interface TriggerProps {
	tooltip: string;
	onClick?: VoidFunction;
}

const Icon: React.FC = () => <GlobalOutlined /* noMargin */ size='smaller' />;

const Trigger = forwardRef<typeof IconButton, TriggerProps>(({ tooltip, ...props }, ref) => {
	const tooltipProps = useMemoStringify<TooltipProps>({ placement: 'top' });

	return (
		<IconButton
			{...props}
			borderless
			color='white'
			className='ee-timezone-info__button ee-btn--tiny'
			icon={Icon}
			tooltip={tooltip}
			tooltipProps={tooltipProps}
			ref={ref}
		/>
	);
});

export default Trigger;
