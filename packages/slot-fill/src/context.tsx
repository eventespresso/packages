import { Component, createContext, useContext, useState, useEffect } from 'react';
import { forEach, prop, sortBy, without } from 'ramda';

import { SlotFillContext as SlotFillContextType } from './types';

const SlotFillContext = createContext<SlotFillContextType>({
	registerSlot: () => {},
	unregisterSlot: () => {},
	registerFill: () => {},
	unregisterFill: () => {},
	getSlot: () => null,
	getFills: () => null,
	subscribe: () => null,
});
const { Provider, Consumer } = SlotFillContext;

export class SlotFillProvider extends Component {
	slots;
	fills;
	listeners;
	contextValue;

	constructor(props) {
		super(props);

		this.registerSlot = this.registerSlot.bind(this);
		this.registerFill = this.registerFill.bind(this);
		this.unregisterSlot = this.unregisterSlot.bind(this);
		this.unregisterFill = this.unregisterFill.bind(this);
		this.getSlot = this.getSlot.bind(this);
		this.getFills = this.getFills.bind(this);
		this.hasFills = this.hasFills.bind(this);
		this.subscribe = this.subscribe.bind(this);

		this.slots = {};
		this.fills = {};
		this.listeners = [];
		this.contextValue = {
			registerSlot: this.registerSlot,
			unregisterSlot: this.unregisterSlot,
			registerFill: this.registerFill,
			unregisterFill: this.unregisterFill,
			getSlot: this.getSlot,
			getFills: this.getFills,
			hasFills: this.hasFills,
			subscribe: this.subscribe,
		};
	}

	registerSlot(name, slot) {
		const previousSlot = this.slots[name];
		this.slots[name] = slot;
		this.triggerListeners();

		// Sometimes the fills are registered after the initial render of slot
		// But before the registerSlot call, we need to rerender the slot
		this.forceUpdateSlot(name);

		// If a new instance of a slot is being mounted while another with the
		// same name exists, force its update _after_ the new slot has been
		// assigned into the instance, such that its own rendering of children
		// will be empty (the new Slot will subsume all fills for this name).
		if (previousSlot) {
			previousSlot.forceUpdate();
		}
	}

	registerFill(name, instance) {
		this.fills[name] = [...(this.fills[name] || []), instance];
		this.forceUpdateSlot(name);
	}

	unregisterSlot(name, instance) {
		// If a previous instance of a Slot by this name unmounts, do nothing,
		// as the slot and its fills should only be removed for the current
		// known instance.
		if (this.slots[name] !== instance) {
			return;
		}

		delete this.slots[name];
		this.triggerListeners();
	}

	unregisterFill(name, instance) {
		this.fills[name] = without([instance], this.fills[name]);
		this.resetFillOccurrence(name);
		this.forceUpdateSlot(name);
	}

	getSlot(name) {
		return this.slots[name];
	}

	getFills(name, slotInstance) {
		// Fills should only be returned for the current instance of the slot
		// in which they occupy.
		if (this.slots[name] !== slotInstance) {
			return [];
		}
		return sortBy(prop('priority'), this.fills[name]);
	}

	hasFills(name) {
		return this.fills[name] && !!this.fills[name].length;
	}

	resetFillOccurrence(name) {
		forEach<any>((instance) => {
			// eslint-disable-next-line no-param-reassign
			instance.occurrence = undefined;
		}, this.fills[name]);
	}

	forceUpdateSlot(name) {
		const slot = this.getSlot(name);

		if (slot) {
			slot.forceUpdate();
		}
	}

	triggerListeners() {
		this.listeners.forEach((listener) => listener());
	}

	subscribe(listener) {
		this.listeners.push(listener);

		return () => {
			this.listeners = without(this.listeners, listener);
		};
	}

	render() {
		return <Provider value={this.contextValue}>{this.props.children}</Provider>;
	}
}

/**
 * React hook returning the active slot given a name.
 *
 * @param {string} name Slot name.
 * @return {Object} Slot object.
 */
export const useSlot = (name) => {
	const { getSlot, subscribe } = useContext(SlotFillContext);
	const [slot, setSlot] = useState(getSlot(name));

	useEffect(() => {
		setSlot(getSlot(name));
		const unsubscribe = subscribe(() => {
			setSlot(getSlot(name));
		});

		return unsubscribe;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name]);

	return slot;
};

export { Consumer };
