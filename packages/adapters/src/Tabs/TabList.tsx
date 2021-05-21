import { TabList as ChakraTabList } from '@chakra-ui/react';

import type { TabListAdapterProps } from './types';

export const TabList: React.FC<TabListAdapterProps> = (props) => <ChakraTabList {...props} />;
