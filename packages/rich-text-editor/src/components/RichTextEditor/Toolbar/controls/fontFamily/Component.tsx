import { useCallback, useMemo } from 'react';

import { Select } from '@eventespresso/ui-components';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';

const Component: React.FC<ToolbarItemProps<'fontFamily'>> = ({ currentValue, toolbar, onChange, config }) => {
	const onChangeValue = useCallback(
		(fontFamily: string) => {
			onChange(fontFamily);
		},
		[onChange]
	);

	const options = useMemo(() => {
		return config?.items?.map((item) => {
			return { value: item, label: item };
		});
	}, [config?.items]);

	return (
		<ToolbarItem
			{...toolbar}
			as={Select as any}
			//@ts-ignore
			debounceDelay={0}
			flow='inline'
			onChangeValue={onChangeValue}
			options={options}
			value={currentValue}
		/>
	);
};

export default Component;
