import React from 'react';
import classNames from 'classnames';
import { useDisclosure } from '@chakra-ui/hooks';

import Tooltip from '../Tooltip';
import { InfoCircleOutlined } from '@eventespresso/icons';

import './style.scss';

interface ClickableIconWithTooltipProps {
	className?: string;
	icon: typeof InfoCircleOutlined;
	tooltipText: string;
}

export const ClickableIconWithTooltip: React.FC<ClickableIconWithTooltipProps> = ({
	icon: Icon,
	tooltipText,
	...props
}) => {
	const { isOpen, onToggle } = useDisclosure();
	const className = classNames('ee-clickable-tooltip', props.className);

	const icon = <Icon className={className} onClick={onToggle} />;

	return (
		<Tooltip isOpen={isOpen} tooltip={tooltipText}>
			{icon}
		</Tooltip>
	);
};
