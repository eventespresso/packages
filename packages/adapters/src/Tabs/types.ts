import type {
	TabProps as ChakraTabProps,
	TabsProps as ChakraTabsProps,
	TabListProps as ChakraTabListProps,
	TabPanelProps as ChakraTabPanelProps,
	TabPanelsProps as ChakraTabPanelsProps,
} from '@chakra-ui/react';

export interface TabProps extends ChakraTabProps {}

export interface TabsProps extends ChakraTabsProps {
	wrapperClassName?: string;
}

export interface TabListProps extends ChakraTabListProps {}

export interface TabPanelProps extends ChakraTabPanelProps {}

export interface TabPanelsProps extends ChakraTabPanelsProps {}
