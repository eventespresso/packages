import { useCallback, useRef, useState } from 'react';

import { __ } from '@eventespresso/i18n';
import { Button, IconButton, Switch, TextInput } from '@eventespresso/ui-components';
import { useDisclosure } from '@eventespresso/hooks';

import { ToolbarItem } from '../../ToolbarItem';
import { ToolbarItemProps } from '../../types';
import { ToolbarPopover } from '../../ToolbarPopover';

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
			<ToolbarPopover
				initialFocusRef={inputRef}
				isOpen={isUrlPopoverOpen}
				trigger={
					<ToolbarItem
						{...toolbar}
						aria-label={__('Edit link')}
						as={IconButton}
						borderless
						icon={link?.icon}
						onClick={onClickTrigger}
					/>
				}
				onClose={toggleUrlPopover}
			>
				<br />
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
				<br />
				<Switch isChecked={openInNewTab} onChangeValue={setOpenInNewTab} id='open-in-new-tab' />
				&emsp;
				<label htmlFor='open-in-new-tab'>Open in new tab</label>
				<br />
				<Button onClick={addLink} isDisabled={!url || !title}>
					{'Add'}
				</Button>
				&emsp;
				<Button onClick={onCloseUrlPopover}>{'Cancel'}</Button>
			</ToolbarPopover>

			<ToolbarItem {...toolbar} as={IconButton} borderless icon={unlink?.icon} onClick={removeLink} />
		</>
	);
};

export default Component;
