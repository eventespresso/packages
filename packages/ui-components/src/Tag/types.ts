import type { Colors, WithTooltipProps } from '../';

export interface TagProps extends Colors, WithTooltipProps {
	className?: string;
	icon?: JSX.Element;
}
