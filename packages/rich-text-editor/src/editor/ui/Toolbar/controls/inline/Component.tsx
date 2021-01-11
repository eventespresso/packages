import { useCallback } from 'react';
import classNames from 'classnames';

import { ToolbarItem } from '../../../../components';
import { ToolbarItemProps } from '../../../types';

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
				const className = classNames({
					active: currentValue?.[item] === true || (item === 'monospace' && currentValue?.CODE),
				});

				return (
					<ToolbarItem {...toolbar} key={item} className={className} onClick={getOnClick(item)}>
						{(Icon && <Icon />) || item}
					</ToolbarItem>
				);
			})}
		</>
	);
};

export default Component;
