import { useCallback, useEffect, useState } from 'react';
import { extractInlineStyle } from 'draftjs-utils';

import { __ } from '@eventespresso/i18n';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@eventespresso/adapters';
import { Textarea } from '@eventespresso/ui-components';
import { useIfMounted, usePrevious } from '@eventespresso/hooks';

import { useEditorState } from '../../hooks';
import { editorStateToHtml, htmlToEditorState } from '../../utils';

import './style.scss';

export interface WithEditModeProps {
	visualEditor?: React.ReactNode;
}

export const WithEditMode: React.FC<WithEditModeProps> = ({ visualEditor }) => {
	const [editorState, updateEditorState] = useEditorState();
	const [value, setValue] = useState<string>();

	const ifMounted = useIfMounted();

	const onChangeTab = useCallback(
		(index: number) => {
			// if the new tab is index 1, i.e. HTML Editor
			if (index === 1) {
				ifMounted(() => {
					// update the local state to make sure it's upto date
					const html = editorStateToHtml(editorState);
					setValue(html);
				});
			}
		},
		[editorState, ifMounted]
	);

	const previousValue = usePrevious(value);
	// if state changes from the consumer
	useEffect(() => {
		ifMounted(() => {
			if (typeof value !== 'undefined' && previousValue !== value) {
				const newState = htmlToEditorState(value);
				extractInlineStyle(newState);
				updateEditorState(newState);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const html = e.target.value;
		setValue?.(html);
	}, []);

	return (
		<Tabs align='end' variant='enclosed' wrapperClassName='ee-rte-with-edit-mode' onChange={onChangeTab}>
			<TabList>
				<Tab>{__('Visual editor')}</Tab>
				<Tab>{__('HTML editor')}</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>{visualEditor}</TabPanel>
				<TabPanel>
					<Textarea className='ee-html-editor' value={value} onChange={onChangeHandler} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default WithEditMode;
