import { TabPanels as ChakraTabPanels } from '@chakra-ui/react';
import classNames from 'classnames';

import type { TabPanelsProps } from './types';

export const TabPanels: React.FC<TabPanelsProps> = (props) => {
	const className = classNames(props.className, 'ee-tabs__tab-panels');

	return <ChakraTabPanels {...props} className={className} />;
};
