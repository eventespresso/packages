import React, { useCallback, useState } from 'react';

import { __ } from '@eventespresso/i18n';
// TODO replace import path
import { Textarea } from '../../../../components/src/Textarea';

import { RTEWithEditModeProps } from './types';
import { RichTextEditor } from '../RichTextEditor';

export const RTEWithEditMode: React.FC<RTEWithEditModeProps> = ({ enableEditMode = true, ...props }) => {
	const [isVisualMode, setIsVisualMode] = useState(true);
	const toggleEditMode = useCallback(() => setIsVisualMode((m) => !m), []);

	const editor = <RichTextEditor {...props} />;

	const { defaultValue, onChange, onChangeValue, placeholder, value } = props;

	const onChangeHandler = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const html = e.target.value;
			onChange?.(html);
			onChangeValue?.(html);
		},
		[onChange, onChangeValue]
	);

	if (!enableEditMode) {
		return editor;
	}

	// TODO replace button with Button from components
	return (
		<div>
			<button onClick={toggleEditMode} type='button'>
				{isVisualMode ? __('Code editor') : __('Visual editor')}
			</button>
			<div>
				{isVisualMode ? (
					editor
				) : (
					<Textarea
						defaultValue={defaultValue}
						placeholder={placeholder}
						value={value}
						onChange={onChangeHandler}
					/>
				)}
			</div>
		</div>
	);
};
