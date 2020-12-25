import type { TooltipProps } from '@eventespresso/adapters';

export interface WithTooltipProps {
	buttonText?: React.ReactNode;
	showTooltipOnMobile?: boolean;
	tooltip?: string;
	tooltipProps?: TooltipProps;
}
