import type { Colors, withTooltipProps } from '../';

export interface TagProps extends Colors, withTooltipProps {
	className?: string;
	icon?: JSX.Element;
}
