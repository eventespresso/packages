import React from 'react';
import { Badge as ChakraBadge } from '@chakra-ui/core';

import type { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ children, style }) => <ChakraBadge style={style}>{children}</ChakraBadge>;

export default Badge;
