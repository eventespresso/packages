import { useCallback } from 'react';

import { IconButton } from '@eventespresso/ui-components';

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
				const itemIcon = config?.[item]?.icon;
				const isActive = currentValue?.[item] === true || (item === 'monospace' && currentValue?.CODE);

				return (
					<ToolbarItem
						{...toolbar}
						as={IconButton}
						borderless
						icon={itemIcon}
						isActive={isActive}
						key={item}
						onClick={getOnClick(item)}
					>
						{item}
					</ToolbarItem>
				);
			})}
		</>
	);
};

export default Component;
