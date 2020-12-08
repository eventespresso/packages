import type { TooltipProps as ChakraTooltipProps } from '@chakra-ui/core';

export interface TooltipProps extends Omit<ChakraTooltipProps, 'aria-label' | 'children' | 'title'> {
	['aria-label']?: string;
	tooltip?: string;
}
