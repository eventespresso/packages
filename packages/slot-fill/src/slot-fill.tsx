import BaseSlot from './slot';
import BaseFill from './fill';

export function Slot(props) {
	return <BaseSlot {...props} />;
}

export function Fill(props) {
	// We're adding it here so they can register themselves before
	// their respective slot has been registered. Only the Fill that has a slot
	// will render. The other one will return null.
	return <BaseFill {...props} />;
}

export function createSlotFill(name) {
	const FillComponent = (props) => <Fill name={name} {...props} />;
	FillComponent.displayName = name + 'Fill';

	const SlotComponent = (props) => <Slot name={name} {...props} />;
	SlotComponent.displayName = name + 'Slot';

	return {
		Fill: FillComponent,
		Slot: SlotComponent,
	};
}

export { SlotFillProvider } from './context';
