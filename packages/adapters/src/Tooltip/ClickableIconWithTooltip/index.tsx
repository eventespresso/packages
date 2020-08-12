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
	const { isOpen, onOpen, onClose } = useDisclosure();
	const className = classNames('ee-clickable-tooltip', props.className);

	const onClick = () => {
		return isOpen ? onClose() : onOpen();
	};

	const icon = <Icon className={className} onClick={onClick} />;

	return (
		<Tooltip isOpen={isOpen} tooltip={tooltipText}>
			{icon}
		</Tooltip>
	);
};
