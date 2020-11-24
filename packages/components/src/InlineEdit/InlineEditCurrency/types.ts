import type { MoneyDisplay } from '@eventespresso/services';

export interface InlineEditCurrencyProps extends Partial<MoneyDisplay> {
	amount: string | number;
	id: string;
	isEditDisabled?: boolean;
	onChange?: (result?: { amount: string | number; id: string }) => void;
	placeholder?: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	tooltip?: string;
	wrapperProps?: React.HTMLAttributes<Element>;
	vertical?: boolean;
}
