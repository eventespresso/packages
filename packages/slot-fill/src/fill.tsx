import { useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Consumer, useSlot } from './context';
import { FillProps, SlotFillContext } from './types';

let occurrences = 0;

export const FillComponent: React.FC<FillProps & SlotFillContext> = ({
	name,
	children,
	registerFill,
	unregisterFill,
}) => {
	const slot = useSlot(name);

	const ref = useRef<any>({
		name,
		children,
	});

	if (!ref.current.occurrence) {
		ref.current.occurrence = ++occurrences;
	}

	useLayoutEffect(() => {
		const instance = ref.current;
		registerFill(name, instance);

		return () => unregisterFill(name, instance);
	}, [name, registerFill, unregisterFill]);

	useLayoutEffect(() => {
		ref.current.children = children;
		if (slot) {
			slot.forceUpdate();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [children]);

	useLayoutEffect(() => {
		if (name === ref.current.name) {
			// ignore initial effect
			return;
		}
		unregisterFill(ref.current.name, ref.current);
		ref.current.name = name;
		registerFill(name, ref.current);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name]);

	if (!slot || !slot.node) {
		return null;
	}

	return createPortal(typeof children === 'function' ? children(slot.props.fillProps) : children, slot.node);
};

const Fill: React.FC<FillProps> = (props) => (
	<Consumer>
		{({ registerFill, unregisterFill, ...rest }) => (
			<FillComponent {...rest} {...props} registerFill={registerFill} unregisterFill={unregisterFill} />
		)}
	</Consumer>
);

export default Fill;
