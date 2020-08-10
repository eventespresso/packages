import React from 'react';
import classNames from 'classnames';

import ClickableIconWithTooltip from '../ClickableIconWithTooltip';
import { InfoCircleOutlined } from '../../icons';

import './style.scss';

interface HelpIconProps {
	className?: string;
	clickable?: boolean;
	tooltipText?: string;
}

const HelpIcon: React.FC<HelpIconProps> = ({ clickable, tooltipText, ...props }) => {
	const className = classNames('ee-help-icon', props.className);

	if (clickable) {
		return <ClickableIconWithTooltip className={className} icon={InfoCircleOutlined} tooltipText={tooltipText} />;
	}

	return <InfoCircleOutlined className={className} />;
};

export default HelpIcon;
