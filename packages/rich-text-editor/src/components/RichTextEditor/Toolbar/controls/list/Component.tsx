import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { Select } from '@eventespresso/ui-components';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';
import InlineComponent from '../inline/Component';

const lists = {
	unordered: __('Unordered list'),
	ordered: __('Ordered list'),
	indent: __('Indent'),
	outdent: __('Outdent'),
};

const Component: React.FC<ToolbarItemProps<'list'>> = ({ currentValue, toolbar, onChange, config }) => {
	const onChangeValue = useCallback(
		(list: string) => {
			onChange(list);
		},
		[onChange]
	);

	const options = useMemo(() => {
		return config?.items?.map((item) => {
			return { value: item, label: lists?.[item] || item };
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
