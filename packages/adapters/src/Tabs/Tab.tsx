import { Tab as ChakraTab } from '@chakra-ui/react';

import type { TabProps } from './types';

export const Tab: React.FC<TabProps> = (props) => {
	return <ChakraTab tabIndex={0} {...props} />;
};
