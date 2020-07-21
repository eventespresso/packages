import type { CurrencyProps } from '@eventespresso/services';

export interface MoneyFieldProps {
	children: React.ReactNode;
	className?: string;
	currency?: CurrencyProps;
	isPercent?: boolean;
}
