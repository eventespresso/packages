import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { ColorPicker, Popover } from '@eventespresso/ui-components';
import { useDisclosure } from '@eventespresso/hooks';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';

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
		<Popover
			isOpen={isColorPickerPopoverOpen}
			trigger={
				<ToolbarItem {...toolbar} onClick={toggleColorPickerPopover}>
					{config.icon && <config.icon />}
				</ToolbarItem>
			}
			aria-label={__('Set color')}
			onClose={toggleColorPickerPopover}
			className='colorpicker-popover'
		>
			<p>{__('Text color')}</p>
			<ColorPicker onChange={onChangeTextColor} color={currentValue.color} />
			<p>{__('Background color')}</p>
			<ColorPicker onChange={onChangeBgColor} color={currentValue.bgcolor} />
		</Popover>
	);
};

export default Component;
