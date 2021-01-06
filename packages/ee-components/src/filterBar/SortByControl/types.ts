import type { SelectProps } from '@eventespresso/ui-components';
import type { EntityType } from '../../';

export interface SortByControlProps
	extends EntityType,
		Pick<SelectProps, 'label' | 'onChangeValue' | 'options' | 'value'> {}
