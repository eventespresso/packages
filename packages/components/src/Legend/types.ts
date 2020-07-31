import type { AnyObject } from '@eventespresso/services';
import type { IconName } from '@eventespresso/icons';

export interface LegendProps {
	direction?: 'row';
	legendConfig: LegendConfig;
}

interface IconType {
	bgClassName?: string;
	description: string;
	icon: IconName | React.ReactNode;
}

export interface LegendConfig {
	icons: IconType[];
	swatches?: AnyObject;
}
