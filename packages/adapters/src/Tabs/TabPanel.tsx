import { TabPanel as ChakraTabPanel } from '@chakra-ui/react';

import type { TabPanelProps } from './types';

export const TabPanel: React.FC<TabPanelProps> = (props) => {
	return <ChakraTabPanel {...props} />;
};
