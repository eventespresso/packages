import { TooltipProps } from '../Button/node_modules/@infraUI/display';

export interface withTooltipProps {
  buttonText?: React.ReactNode;
  showTooltipOnMobile?: boolean;
  tooltip?: string;
  tooltipProps?: TooltipProps;
}
