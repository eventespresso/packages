import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@eventespresso/adapters';
import { Textarea } from '@eventespresso/ui-components';

import { RTEWithEditModeProps } from './types';
import { RichTextEditor } from '../RichTextEditor';

import './style.scss';

export const RTEWithEditMode: React.FC<RTEWithEditModeProps> = ({ enableEditMode = true, isDisabled, ...props }) => {
	const editor = <RichTextEditor readOnly={isDisabled} toolbarHidden={isDisabled} {...props} />;

	const { defaultValue, onChange, onChangeValue, placeholder, value } = props;

	const onChangeHandler = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			const html = e.target.value;
			onChange?.(html);
			onChangeValue?.(html);
		},
		[onChange, onChangeValue]
	);

	if (!enableEditMode) {
		return editor;
	}

	return (
		<Tabs align='end' variant='enclosed' wrapperClassName='ee-rte-with-edit-mode'>
			<TabList>
				<Tab>{__('Visual editor')}</Tab>
				<Tab>{__('HTML editor')}</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>{editor}</TabPanel>
				<TabPanel>
					<Textarea
						className='ee-html-editor'
						defaultValue={defaultValue}
						isDisabled={isDisabled}
						placeholder={placeholder}
						value={value}
						onChange={onChangeHandler}
					/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};
