import type { AnyObject } from '@eventespresso/utils';
import type { IconName } from '@eventespresso/icons';
import { ButtonProps } from '../Button';

export interface LegendBaseProps {
	className?: string;
	columnsPerRow?: number;
	direction?: 'row';
	termWhiteBg?: boolean;
}

export interface LegendProps extends LegendBaseProps {
	legendConfig: LegendConfig<string>;
}

interface IconType<className = string> {
	bgClassName?: string;
	className?: className;
	description: string;
	icon: IconName | React.ElementType;
}

export interface LegendConfig<className> {
	icons: IconType<className>[];
	swatches?: AnyObject;
}

export interface ToggleLegendButtonProps extends ButtonProps {
	showLegend?: boolean;
	toggleLegend: VoidFunction;
}
