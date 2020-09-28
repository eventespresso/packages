import type { AnyObject } from '@eventespresso/utils';
import type { IconName } from '@eventespresso/icons';
import { ButtonProps } from '../Button';

export interface LegendBaseProps {
	columnsPerRow?: number;
	direction?: 'row';
	termWhiteBg?: boolean;
}

export interface LegendProps extends LegendBaseProps {
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

export interface ToggleLegendButtonProps extends ButtonProps {
	showLegend?: boolean;
	toggleLegend: VoidFunction;
}
