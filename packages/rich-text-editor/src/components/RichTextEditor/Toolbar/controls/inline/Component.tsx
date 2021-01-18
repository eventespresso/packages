import { useCallback } from 'react';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';

const Component: React.FC<ToolbarItemProps<'inline'>> = ({ toolbar, currentValue, onChange, config }) => {
	const getOnClick = useCallback(
		(item: string) => (value: any) => {
			onChange(item, value);
		},
		[onChange]
	);

	return (
		<>
			{config?.items?.map((item) => {
				const itemConfig = config?.[item];
				const Icon = itemConfig?.icon;

				const isActive = currentValue?.[item] === true || (item === 'monospace' && currentValue?.CODE);

				return (
					<ToolbarItem {...toolbar} isActive={isActive} key={item} onClick={getOnClick(item)}>
						{(Icon && <Icon />) || item}
					</ToolbarItem>
				);
			})}
		</>
	);
};

export default Component;
