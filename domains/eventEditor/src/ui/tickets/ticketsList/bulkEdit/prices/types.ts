export type EditMode = 'together' | 'separate';

export type EditPricesBaseProps = {
	isOpen?: boolean;
	onClose?: VoidFunction;
};

export interface CommonProps {
	mode?: EditMode;
}
