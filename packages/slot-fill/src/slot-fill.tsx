import BaseSlot from './slot';
import BaseFill from './fill';
import { FillProps, SlotProps } from './types';

export function Slot(props: SlotProps) {
	return <BaseSlot {...props} />;
}

export function Fill(props: FillProps) {
	// We're adding it here so they can register themselves before
	// their respective slot has been registered. Only the Fill that has a slot
	// will render. The other one will return null.
	return <BaseFill {...props} />;
}

export function createSlotFill(name: string) {
	const FillComponent: React.FC<FillProps> = (props) => <Fill name={name} {...props} />;
	FillComponent.displayName = name + 'Fill';

	const SlotComponent: React.FC<SlotProps> = (props) => <Slot name={name} {...props} />;
	SlotComponent.displayName = name + 'Slot';

	return {
		Fill: FillComponent,
		Slot: SlotComponent,
	};
}

export * from './context';
