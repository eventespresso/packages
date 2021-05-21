import classNames from 'classnames';

import { TabList as TabListAdapter } from '@eventespresso/adapters';
import type { TabListProps } from './types';

import './style.scss';

export const TabList: React.FC<TabListProps> = (props) => {
	const className = classNames(props.className, 'ee-tabs__tab-list');

	return <TabListAdapter {...props} className={className} />;
};

export default TabList;
