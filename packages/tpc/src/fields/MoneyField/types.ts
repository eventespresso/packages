import type { CurrencyProps } from '@eventespresso/services';

export interface MoneyFieldProps {
	className?: string;
	currency?: CurrencyProps;
	input: React.ReactNode;
	isPercent?: boolean;
	sign: CurrencyProps['sign'];
	signB4: CurrencyProps['signB4'];
}
