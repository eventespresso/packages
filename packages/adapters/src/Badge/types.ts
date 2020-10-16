import type { BadgeProps as ChakraBadgeProps } from '@chakra-ui/core';

export interface BadgeProps extends Pick<ChakraBadgeProps, 'className' | 'style'> {}
