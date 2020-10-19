import React from 'react';
import DotDotDot from 'react-dotdotdot';

import type { DotDotDotProps } from './types';

export const Dotdotdot: React.FC<DotDotDotProps> = ({ children, clamp }) => (
	<DotDotDot clamp={clamp}>{children}</DotDotDot>
);
