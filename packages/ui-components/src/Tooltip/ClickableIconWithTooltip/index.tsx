import classNames from 'classnames';

import { InfoCircleOutlined } from '@eventespresso/icons';
import { useDisclosure } from '@eventespresso/hooks';
import { Tooltip } from '../../';

import './style.scss';
import { useEffect, useRef } from 'react';

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
	const { isOpen, onClose, onToggle } = useDisclosure();
	const wrapperRef = useRef(null);
	const className = classNames('ee-clickable-tooltip', props.className);

	const icon = <Icon className={className} onClick={onToggle} size='small' />;

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				onClose();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose]);

	return (
		<div className='ee-clickable-tooltip__wrapper' ref={wrapperRef}>
			<Tooltip isOpen={isOpen} shouldWrapChildren tooltip={tooltipText}>
				{icon}
			</Tooltip>
		</div>
	);
};
