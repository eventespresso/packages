import classNames from 'classnames';

import { Tab as TabAdapter } from '@eventespresso/adapters';
import type { TabProps } from './types';

import './style.scss';

export const Tab: React.FC<TabProps> = (props) => {
	const className = classNames(props.className, 'ee-tabs__tab');
	return <TabAdapter {...props} className={className} />;
};

export default Tab;
