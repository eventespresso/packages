import type { ColorPickerProps as ColorPickerAdapterProps } from '@eventespresso/adapters';
import type { ButtonProps } from '../Button';

export interface ColorPickerProps extends ColorPickerAdapterProps {
	defaultColor?: string;
}

export interface SwatchProps extends Omit<ButtonProps, 'onSelect'> {
	className?: string;
	color?: string;
	isSelected?: boolean;
	onSelect: (color: string) => void;
}

export type PresetColor = {
	name: string;
	color: string;
};
