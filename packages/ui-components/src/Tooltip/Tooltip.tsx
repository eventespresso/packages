import classNames from 'classnames';

import { Tooltip as TooltipAdapter, TooltipProps } from '@eventespresso/adapters';

export const Tooltip: React.FC<TooltipProps> = (props) => {
	const className = classNames('ee-tooltip', props.className);

	return <TooltipAdapter {...props} className={className} />;
};
