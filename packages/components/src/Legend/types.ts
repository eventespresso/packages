import type { AnyObject } from '@eventespresso/services';
import type { IconName } from '@eventespresso/icons';

export interface LegendProps {
	direction?: 'row';
	legendConfig: LegendConfig;
}

interface IconType {
	bgClassName?: string;
	description: string;
	icon: IconName | React.ElementType;
}

export interface LegendConfig {
	icons: IconType[];
	swatches?: AnyObject;
}

export interface ToggleLegendButtonProps {
	className?: string;
	isDisabled?: boolean;
	showLegend?: boolean;
	toggleLegend: VoidFunction;
}
