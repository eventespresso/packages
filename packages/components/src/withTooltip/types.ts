import { TooltipProps } from '@eventespresso/adapters';

export interface withTooltipProps {
	buttonText?: React.ReactNode;
	showTooltipOnMobile?: boolean;
	tooltip?: string;
	tooltipProps?: TooltipProps;
}
