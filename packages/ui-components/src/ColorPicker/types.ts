import type { ButtonHTMLAttributes } from 'react';
import type { ColorPickerProps as ColorPickerAdapterProps } from '@eventespresso/adapters';

export interface ColorPickerProps extends ColorPickerAdapterProps {
	defaultColor?: string;
}

export interface SwatchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onSelect'> {
	className?: string;
	color?: string;
	isSelected?: boolean;
	onSelect: (color: string) => void;
}

export type PresetColor = {
	name: string;
	color: string;
};
