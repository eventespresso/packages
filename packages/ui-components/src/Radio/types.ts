import type {
	RadioProps as RadioAdapterProps,
	RadioGroupProps as RadioGroupAdapterProps,
	OptionProps,
} from '@eventespresso/adapters';

export interface RadioProps extends RadioAdapterProps {}

export interface RadioGroupProps extends Partial<RadioGroupAdapterProps> {
	options?: Array<Omit<OptionProps, 'options'>>;
}
