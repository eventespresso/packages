import type { CurrencyProps } from '@eventespresso/services';

export interface MoneyInputWrapperProps {
	className?: string;
	currency?: CurrencyProps;
	isPercent?: boolean;
	sign: CurrencyProps['sign'];
	signB4: CurrencyProps['signB4'];
}
