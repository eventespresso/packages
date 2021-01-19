import { forwardRef } from 'react';

import { GlobalOutlined } from '@eventespresso/icons';
import { IconButton } from '../../';

interface TriggerProps {
	tooltip: string;
	onClick?: VoidFunction;
}

const Icon: React.FC = () => <GlobalOutlined size='smaller' />;

const Trigger = forwardRef<typeof IconButton, TriggerProps>(({ tooltip, ...props }, ref) => {
	return (
		<IconButton
			{...props}
			borderless
			className='ee-timezone-info__button'
			icon={Icon}
			tooltip={tooltip}
			ref={ref}
		/>
	);
});

export default Trigger;
