import classNames from 'classnames';

import { Tabs as TabsAdapter } from '@eventespresso/adapters';
import type { TabsProps } from './types';

import './style.scss';

export const Tabs: React.FC<TabsProps> = ({ wrapperClassName, ...props }) => {
	const className = classNames(props.className, 'ee-tabs');
	const wrapperClass = classNames(wrapperClassName, 'ee-tabs__wrapper');

	return (
		<div className={className}>
			<TabsAdapter {...props} className={wrapperClass} />
		</div>
	);
};

export default Tabs;
