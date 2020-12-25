export interface InlineEditCurrencyProps {
	afterAmount?: string;
	amount: string | number;
	beforeAmount?: string;
	formatAmount?: (amount: string | number) => string;
	id: string;
	isEditDisabled?: boolean;
	onChange?: (result?: { amount: string | number; id: string }) => void;
	placeholder?: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
	tooltip?: string;
	vertical?: boolean;
	wrapperProps?: React.HTMLAttributes<Element>;
}
