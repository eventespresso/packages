import { useCallback } from 'react';

import { __ } from '@eventespresso/i18n';
import { useDisclosure } from '@eventespresso/hooks';
import { Textarea, Button } from '@eventespresso/ui-components';

import { RTEWithEditModeProps } from './types';
import { RichTextEditor } from '../RichTextEditor';

export const RTEWithEditMode: React.FC<RTEWithEditModeProps> = ({ enableEditMode = true, ...props }) => {
	const { isOpen: isVisualMode, onToggle: toggleEditMode } = useDisclosure({ defaultIsOpen: true });

	const editor = <RichTextEditor {...props} />;

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
		<div>
			<Button onClick={toggleEditMode}>{isVisualMode ? __('Code editor') : __('Visual editor')}</Button>
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
