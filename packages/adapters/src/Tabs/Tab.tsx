import { Tab as ChakraTab } from '@chakra-ui/react';

import type { TabAdapterProps } from './types';

export const Tab: React.FC<TabAdapterProps> = (props) => <ChakraTab tabIndex={0} {...props} />;
