import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { Select } from '@eventespresso/ui-components';

import { ToolbarItem } from '../../../../components';
import { ToolbarItemProps } from '../../../types';
import InlineComponent from '../inline/Component';

const textaligns = {
	unordered: __('Unordered textalign'),
	ordered: __('Ordered textalign'),
	indent: __('Indent'),
	outdent: __('Outdent'),
};

const Component: React.FC<ToolbarItemProps<'textAlign'>> = ({ currentValue, toolbar, onChange, config }) => {
	const onChangeValue = useCallback(
		(textalign: string) => {
			onChange(textalign);
		},
		[onChange]
	);

	const options = useMemo(() => {
		return config?.items?.map((item) => {
			return { value: item, label: textaligns?.[item] || item };
		});
	}, [config?.items]);

	const currentValues = useMemo(() => ({ [currentValue]: true }), [currentValue]);

	return config.asDropdown ? (
		<ToolbarItem
			{...toolbar}
			as={Select as any}
			debounceDelay={0}
			onChangeValue={onChangeValue}
			//@ts-ignore
			options={options}
			//@ts-ignore
			type='inline'
			value={currentValue}
		/>
	) : (
		<InlineComponent config={config as any} currentValue={currentValues} onChange={onChange} toolbar={toolbar} />
	);
};

export default Component;
