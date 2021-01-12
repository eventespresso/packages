import { useCallback, useRef, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { Button, Popover, TextInput } from '@eventespresso/ui-components';
import { useDisclosure } from '@eventespresso/hooks';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';

const Component: React.FC<ToolbarItemProps<'image'>> = ({ toolbar, onChange, config }) => {
	const { isOpen: isImagePopoverOpen, onClose: onCloseImagePopover, onToggle: toggleImagePopover } = useDisclosure({
		defaultIsOpen: false,
	});

	const inputRef = useRef<HTMLInputElement>();

	const [src, setSrc] = useState('');
	const [alt, setAlt] = useState('');
	const [width, setWidth] = useState('auto');
	const [height, setHeight] = useState('auto');

	const addLink = useCallback(() => {
		onChange('', { src, alt, width, height });
		onCloseImagePopover();
	}, [onChange, src, alt, width, height, onCloseImagePopover]);

	return (
		<Popover
			initialFocusRef={inputRef}
			isOpen={isImagePopoverOpen}
			trigger={
				<ToolbarItem {...toolbar} onClick={toggleImagePopover}>
					{config.icon && <config.icon />}
				</ToolbarItem>
			}
			aria-label={__('Add mage')}
			onClose={toggleImagePopover}
			className='image-popover'
		>
			<TextInput
				ref={inputRef}
				value={src}
				placeholder={__('Image URL')}
				onChangeValue={setSrc as typeof onChange}
				mb='0.5em'
			/>
			<TextInput mb='0.5em' value={alt} placeholder={__('Alt text')} onChangeValue={setAlt as typeof onChange} />
			<TextInput mb='0.5em' value={width} placeholder={__('Width')} onChangeValue={setWidth as typeof onChange} />
			<TextInput
				mb='0.5em'
				value={height}
				placeholder={__('Height')}
				onChangeValue={setHeight as typeof onChange}
			/>
			<Button onClick={addLink} isDisabled={!src}>
				{'Add'}
			</Button>
			&emsp;
			<Button onClick={onCloseImagePopover}>{'Cancel'}</Button>
		</Popover>
	);
};

export default Component;
