import { TabPanel as ChakraTabPanel } from '@chakra-ui/react';

import type { TabPanelAdapterProps } from './types';

export const TabPanel: React.FC<TabPanelAdapterProps> = (props) => <ChakraTabPanel {...props} />;
