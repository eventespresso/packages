import { Tabs as ChakraTabs } from '@chakra-ui/react';

import type { TabsAdapterProps } from './types';

export const Tabs: React.FC<TabsAdapterProps> = (props) => <ChakraTabs isLazy variant='unstyled' {...props} />;
