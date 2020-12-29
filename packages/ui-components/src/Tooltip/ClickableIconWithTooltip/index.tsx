import classNames from 'classnames';

import { InfoCircleOutlined } from '@eventespresso/icons';
import { useDisclosure } from '@eventespresso/hooks';
import { Tooltip } from '../../';

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
		<div className='ee-clickable-tooltip__wrapper'>
			<Tooltip isOpen={isOpen} shouldWrapChildren tooltip={tooltipText}>
				{icon}
			</Tooltip>
		</div>
	);
};
