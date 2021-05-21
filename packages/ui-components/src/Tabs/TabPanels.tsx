import classNames from 'classnames';

import { TabPanels as TabPanelsAdapter } from '@eventespresso/adapters';
import type { TabPanelsProps } from './types';

import './style.scss';

export const TabPanels: React.FC<TabPanelsProps> = (props) => {
	const className = classNames(props.className, 'ee-tabs__tab-panels');

	return <TabPanelsAdapter {...props} className={className} />;
};

export default TabPanels;
