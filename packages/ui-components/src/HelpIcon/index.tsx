import classNames from 'classnames';

import { InfoCircleOutlined } from '@eventespresso/icons';
import { ClickableIconWithTooltip } from '../../';

import './style.scss';

export interface HelpIconProps {
	className?: string;
	clickable?: boolean;
	id: string;
	tooltipText?: string;
}

export const HelpIcon: React.FC<HelpIconProps> = ({ clickable, id, tooltipText, ...props }) => {
	const className = classNames('ee-help-icon', props.className);

	if (clickable) {
		return (
			<ClickableIconWithTooltip
				className={className}
				icon={InfoCircleOutlined}
				id={id}
				tooltipText={tooltipText}
			/>
		);
	}

	return <InfoCircleOutlined className={className} id={id} />;
};
