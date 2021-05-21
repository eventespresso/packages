import { TabPanels as ChakraTabPanels } from '@chakra-ui/react';

import type { TabPanelsAdapterProps } from './types';

export const TabPanels: React.FC<TabPanelsAdapterProps> = (props) => <ChakraTabPanels {...props} />;
