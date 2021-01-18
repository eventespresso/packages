import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { ColorPicker } from '@eventespresso/ui-components';
import { useDisclosure } from '@eventespresso/hooks';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';
import { ToolbarPopover } from '../../ToolbarPopover';

const Component: React.FC<ToolbarItemProps<'colorPicker'>> = ({ currentValue, toolbar, onChange, config }) => {
	const { isOpen: isColorPickerPopoverOpen, onToggle: toggleColorPickerPopover } = useDisclosure({
		defaultIsOpen: false,
	});

	const onChangeTextColor = useCallback(
		(color: string) => {
			onChange('color', color);
		},
		[onChange]
	);

	const onChangeBgColor = useCallback(
		(bgcolor: string) => {
			onChange('bgcolor', bgcolor);
		},
		[onChange]
	);

	return (
		<ToolbarPopover
			isOpen={isColorPickerPopoverOpen}
			trigger={
				<ToolbarItem {...toolbar} aria-label={__('Set color')} onClick={toggleColorPickerPopover}>
					{config.icon && <config.icon />}
				</ToolbarItem>
			}
			onClose={toggleColorPickerPopover}
		>
			<p>{__('Text color')}</p>
			<ColorPicker onChange={onChangeTextColor} color={currentValue.color} />
			<p>{__('Background color')}</p>
			<ColorPicker onChange={onChangeBgColor} color={currentValue.bgcolor} />
		</ToolbarPopover>
	);
};

export default Component;
