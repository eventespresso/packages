export interface CurrencyInputProps {
	amount: string | number;
	input: (formattedAmount: string) => React.ReactNode;
	placeholder?: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	tooltip?: string;
	wrapperProps?: React.HTMLAttributes<Element>;
	vertical?: boolean;
}
