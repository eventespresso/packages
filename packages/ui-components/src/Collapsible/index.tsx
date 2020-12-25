import { useRef } from 'react';

import { useSpring, animated } from 'react-spring';

import type { CollapsibleProps } from './types';
import { useRect } from '@eventespresso/hooks';

export const Collapsible: React.FC<CollapsibleProps> = ({ children, className, show = false }) => {
	const ref = useRef<HTMLDivElement>();
	const { height } = useRect(ref);
	const props = useSpring({
		height: show ? height : 0,
		opacity: show ? 1 : 0,
	});

	return (
		<animated.div style={props}>
			<div className={className} ref={ref}>
				{show && children}
			</div>
		</animated.div>
	);
};
