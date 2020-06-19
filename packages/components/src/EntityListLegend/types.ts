import { AnyObject } from '@eventespresso/services';
import type { IconName } from '@eventespresso/icons';

export interface EntityListLegendProps {
	legendConfig: LegendConfig;
}

interface IconType {
	icon: IconName | React.ReactNode;
	description: string;
}

export interface LegendConfig {
	icons: IconType[];
	swatches: AnyObject;
}
