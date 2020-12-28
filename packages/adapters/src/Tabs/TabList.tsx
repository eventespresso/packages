import { TabList as ChakraTabList } from '@chakra-ui/react';
import classNames from 'classnames';

import type { TabListProps } from './types';

export const TabList: React.FC<TabListProps> = (props) => {
	const className = classNames(props.className, 'ee-tabs__tab-list');

	return <ChakraTabList {...props} className={className} />;
};
