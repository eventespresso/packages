import classNames from 'classnames';

import { TabPanel as TabPanelAdapter } from '@eventespresso/adapters';
import type { TabPanelProps } from './types';

import './style.scss';

export const TabPanel: React.FC<TabPanelProps> = (props) => {
	const className = classNames(props.className, 'ee-tabs__tab-panel');
	return <TabPanelAdapter {...props} className={className} />;
};

export default TabPanel;
