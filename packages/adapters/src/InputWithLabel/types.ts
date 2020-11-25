export interface InputWithLabelProps {
	className?: string;
	/**
	 * Input component that needs to be passed in order append/ prepend label to it.
	 */
	input: React.ReactNode;
	leftLabel?: React.ReactNode;
	rightLabel?: React.ReactNode;
}
