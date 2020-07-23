import type { AnyObject } from '@eventespresso/services';
import type { IconName } from '@eventespresso/icons';

export interface LegendProps {
	legendConfig: LegendConfig;
}

interface IconType {
	icon: IconName | React.ReactNode;
	description: string;
}

export interface LegendConfig {
	icons: IconType[];
	swatches?: AnyObject;
}
