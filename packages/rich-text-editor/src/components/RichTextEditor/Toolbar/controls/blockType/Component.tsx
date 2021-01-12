import { useCallback, useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import { Select } from '@eventespresso/ui-components';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';
import InlineComponent from '../inline/Component';

const blockTypes = {
	Normal: __('Normal'),
	H1: __('H1'),
	H2: __('H2'),
	H3: __('H3'),
	H4: __('H4'),
	H5: __('H5'),
	H6: __('H6'),
	Blockquote: __('Block quote'),
	Code: __('Code'),
};

const Component: React.FC<ToolbarItemProps<'blockType'>> = ({ currentValue, toolbar, onChange, config }) => {
	const onChangeValue = useCallback(
		(blockType: string) => {
			onChange(blockType);
		},
		[onChange]
	);

	const options = useMemo(() => {
		return config?.items?.map((item) => {
			return { value: item, label: blockTypes?.[item] || item };
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
