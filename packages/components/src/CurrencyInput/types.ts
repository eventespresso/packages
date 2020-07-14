export interface CurrencyInputProps {
	amount: string | number;
	id: string;
	onChange?: (result?: { amount: string | number; id: string }) => void;
	placeholder?: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
	wrapperProps?: React.HTMLAttributes<Element>;
	vertical?: boolean;
}
