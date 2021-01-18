import classNames from 'classnames';

import { Popover as PopoverAdapter, PopoverProps } from '@eventespresso/adapters';

import './style.scss';

export type { PopoverProps };

export const Popover: React.FC<PopoverProps> = (props) => {
	const className = classNames('ee-popover', props.className);
	const contentClassName = classNames('ee-popover__content', props.contentClassName);

	return (
		<div className={className}>
			<PopoverAdapter {...props} contentClassName={contentClassName} />
		</div>
	);
};
