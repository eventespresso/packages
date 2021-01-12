import { useCallback, useRef, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { Switch, Button, Popover, TextInput } from '@eventespresso/ui-components';
import { useDisclosure } from '@eventespresso/hooks';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';

const Component: React.FC<ToolbarItemProps<'link'>> = ({ currentValue, toolbar, onChange, config }) => {
	const { isOpen: isUrlPopoverOpen, onClose: onCloseUrlPopover, onToggle: toggleUrlPopover } = useDisclosure({
		defaultIsOpen: false,
	});

	const inputRef = useRef<HTMLInputElement>();

	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');
	const [openInNewTab, setOpenInNewTab] = useState(false);

	const setSelectionValues = useCallback(() => {
		setUrl(currentValue.url || '');
		setOpenInNewTab(currentValue.openInNewTab);
		setTitle(currentValue.title || '');
	}, [currentValue.openInNewTab, currentValue.title, currentValue.url]);

	const onClickTrigger = useCallback(() => {
		setSelectionValues();
		toggleUrlPopover();
	}, [setSelectionValues, toggleUrlPopover]);

	const { link, unlink } = config;

	const addLink = useCallback(() => {
		onChange('link', { url, title, openInNewTab });
		onCloseUrlPopover();
	}, [onChange, openInNewTab, title, onCloseUrlPopover, url]);

	const removeLink = useCallback(() => onChange('unlink'), [onChange]);

	return (
		<>
			<Popover
				initialFocusRef={inputRef}
				isOpen={isUrlPopoverOpen}
				trigger={
					<ToolbarItem {...toolbar} onClick={onClickTrigger}>
						{link.icon && <link.icon />}
					</ToolbarItem>
				}
				aria-label={__('Edit link')}
				onClose={toggleUrlPopover}
				className='link-popover'
			>
				<TextInput value={title} placeholder={__('URL title')} onChangeValue={setTitle as typeof onChange} />
				<br />
				<br />
				<TextInput
					ref={inputRef}
					value={url}
					placeholder='https://'
					onChangeValue={setUrl as typeof onChange}
				/>
				<br />
				<Switch isChecked={openInNewTab} onChangeValue={setOpenInNewTab} id='open-in-new-tab' />
				<label htmlFor='open-in-new-tab'>Open in new tab</label>
				<br />
				<Button onClick={addLink} isDisabled={!url || !title}>
					{'Add'}
				</Button>
				&emsp;
				<Button onClick={onCloseUrlPopover}>{'Cancel'}</Button>
			</Popover>

			<ToolbarItem {...toolbar} onClick={removeLink}>
				{unlink.icon && <unlink.icon />}
			</ToolbarItem>
		</>
	);
};

export default Component;
