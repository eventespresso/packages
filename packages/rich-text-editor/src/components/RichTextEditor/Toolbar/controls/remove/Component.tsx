import { useCallback } from 'react';

import { IconButton } from '@eventespresso/ui-components';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';

const Component: React.FC<ToolbarItemProps<'remove'>> = ({ toolbar, onChange, config }) => {
	const onClick = useCallback(() => {
		onChange('');
	}, [onChange]);

	return <ToolbarItem {...toolbar} as={IconButton} borderless icon={config?.icon} onClick={onClick} />;
};

export default Component;
