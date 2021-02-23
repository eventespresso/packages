import { Children, Component, cloneElement } from 'react';
import { isEmpty, is, complement } from 'ramda';

import { Consumer } from './context';
import { SlotProps, SlotFillContext } from './types';

export class SlotComponent extends Component<SlotProps & SlotFillContext> {
	isUnmounted: boolean;
	node: any;

	constructor(props) {
		super(props);

		this.isUnmounted = false;
		this.bindNode = this.bindNode.bind(this);
	}

	componentDidMount() {
		const { registerSlot } = this.props;

		registerSlot(this.props.name, this);
	}

	componentWillUnmount() {
		const { unregisterSlot } = this.props;
		this.isUnmounted = true;
		unregisterSlot(this.props.name, this);
	}

	componentDidUpdate(prevProps) {
		const { name, unregisterSlot, registerSlot } = this.props;

		if (prevProps.name !== name) {
			unregisterSlot(prevProps.name, null);
			registerSlot(name, this);
		}
	}

	bindNode(node) {
		this.node = node;
	}

	forceUpdate() {
		if (this.isUnmounted) {
			return;
		}
		super.forceUpdate();
	}

	render() {
		const { children, name, fillProps = {}, getFills } = this.props;

		const fills = getFills(name, this)
			.map((fill, i, arr) => {
				const fillKey = fill.occurrence;
				const fillChildren =
					typeof fill.children === 'function'
						? fill.children({ ...fillProps, count: arr.length })
						: fill.children;

				return Children.map(fillChildren, (child, childIndex) => {
					if (!child || is(String, child)) {
						return child;
					}

					const childKey = `${fillKey}---${child.key || childIndex}`;
					return cloneElement(child, { key: childKey });
				});
			})
			.filter(
				// In some cases fills are rendered only when some conditions apply.
				// This ensures that we only use non-empty fills when rendering, i.e.,
				// it allows us to render wrappers only when the fills are actually present.
				complement(isEmpty)
			);

		return <>{typeof children === 'function' ? children(fills) : fills}</>;
	}
}

const Slot: React.FC<SlotProps> = (props) => (
	<Consumer>
		{({ registerSlot, unregisterSlot, getFills, ...rest }) => (
			<SlotComponent
				{...rest}
				{...props}
				registerSlot={registerSlot}
				unregisterSlot={unregisterSlot}
				getFills={getFills}
			/>
		)}
	</Consumer>
);

export default Slot;
