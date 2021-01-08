import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { EditorState, Modifier } from 'draft-js';
import { getEntityRange, getSelectionEntity, getSelectionText } from 'draftjs-utils';
import { Switch, Button, Popover, TextInput, ButtonProps } from '@eventespresso/ui-components';
import { useDisclosure } from '@eventespresso/hooks';

import { useEditorState } from '../../hooks';

const Link = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const [editorState, updateEditorState] = useEditorState();

	const inputRef = useRef<HTMLInputElement>();

	const [url, setUrl] = useState('');
	const [urlTitle, setUrlTitle] = useState('');
	const [openInNewTab, setOpenInNewTab] = useState(false);
	const { isOpen: isUrlPopoverOpen, onClose: onCloseUrlPopover, onToggle: toggleUrlPopover } = useDisclosure({
		defaultIsOpen: false,
	});
	const [currentEntity, setCurrentEntity] = useState();

	useEffect(() => {
		setCurrentEntity(editorState ? getSelectionEntity(editorState) : undefined);
	}, [editorState]);

	const setSelectionValues = useCallback(() => {
		const contentState = editorState.getCurrentContent();
		if (currentEntity && contentState.getEntity(currentEntity).getType() === 'LINK') {
			setUrl(contentState.getEntity(currentEntity).getData().url);
			setOpenInNewTab(contentState.getEntity(currentEntity).getData().targetOption === '_blank');

			const entityRange = getEntityRange(editorState, currentEntity);
			setUrlTitle(entityRange && entityRange.text);
		} else {
			setUrlTitle(getSelectionText(editorState));
		}
	}, [currentEntity, editorState]);

	const addLink = useCallback(() => {
		let selection = editorState.getSelection();

		if (currentEntity) {
			const entityRange = getEntityRange(editorState, currentEntity);
			const isBackward = selection.getIsBackward();
			if (isBackward) {
				selection = selection.merge({
					anchorOffset: entityRange.end,
					focusOffset: entityRange.start,
				});
			} else {
				selection = selection.merge({
					anchorOffset: entityRange.start,
					focusOffset: entityRange.end,
				});
			}
		}
		const entityKey = editorState
			.getCurrentContent()
			.createEntity('LINK', 'MUTABLE', {
				url: url,
				targetOption: openInNewTab ? '_blank' : '_self',
			})
			.getLastCreatedEntityKey();

		let contentState = Modifier.replaceText(
			editorState.getCurrentContent(),
			selection,
			`${urlTitle}`,
			editorState.getCurrentInlineStyle(),
			entityKey
		);
		let newEditorState = EditorState.push(editorState, contentState, 'insert-characters');

		// insert a blank space after url
		selection = newEditorState.getSelection().merge({
			anchorOffset: selection.get('anchorOffset') + urlTitle.length,
			focusOffset: selection.get('anchorOffset') + urlTitle.length,
		});
		newEditorState = EditorState.acceptSelection(newEditorState, selection);
		contentState = Modifier.insertText(
			newEditorState.getCurrentContent(),
			selection,
			' ',
			newEditorState.getCurrentInlineStyle(),
			undefined
		);
		updateEditorState(EditorState.push(newEditorState, contentState, 'insert-characters'));
		onCloseUrlPopover();
	}, [currentEntity, editorState, onCloseUrlPopover, openInNewTab, updateEditorState, url, urlTitle]);

	const onClickTrigger = useCallback(() => {
		setSelectionValues();
		toggleUrlPopover();
	}, [setSelectionValues, toggleUrlPopover]);

	return (
		<>
			<Popover
				initialFocusRef={inputRef}
				isOpen={isUrlPopoverOpen}
				trigger={<Button {...props} ref={ref as any} onClick={onClickTrigger} buttonText='Link' />}
				aria-label='Link'
				onClose={toggleUrlPopover}
				className='link-popover'
			>
				<TextInput
					value={urlTitle}
					placeholder='Title here'
					// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
					onChange={(e) => setUrlTitle(e.target.value)}
				/>
				<br />
				<br />
				<TextInput
					ref={inputRef}
					value={url}
					placeholder='https://'
					// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
					onChange={(e) => setUrl(e.target.value)}
				/>
				<br />
				<Switch
					isChecked={openInNewTab}
					// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
					onChange={() => setOpenInNewTab((v) => !v)}
					id='open-in-new-tab'
				/>
				<label htmlFor='open-in-new-tab'>Open in new tab</label>
				<br />
				<Button onClick={addLink} isDisabled={!url || !urlTitle}>
					{'Add'}
				</Button>
				&emsp;
				<Button onClick={onCloseUrlPopover}>{'Cancel'}</Button>
			</Popover>
		</>
	);
});

export default Link;
