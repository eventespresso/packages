import type { CurrencyProps } from '@eventespresso/services';

export interface MoneyFieldProps {
	className?: string;
	currency?: CurrencyProps;
	isPercent?: boolean;
	sign: CurrencyProps['sign'];
	signB4: CurrencyProps['signB4'];
}
