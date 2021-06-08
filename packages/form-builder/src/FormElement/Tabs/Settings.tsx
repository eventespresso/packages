import { __ } from '@eventespresso/i18n';
import { SwitchWithLabel, TextInputWithLabel, withLabel } from '@eventespresso/ui-components';
import { SimpleTextEditor } from '@eventespresso/rich-text-editor';

import type { FormElementProps } from '../../types';
import FieldOptions from './FieldOptions';
import { FIELDS_WITH_OPTIONS } from '../../constants';
import { useUpdateElement } from '../useUpdateElement';

const RTEWithLabel = withLabel(SimpleTextEditor);

export const Settings: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<TextInputWithLabel
				label={__('admin label')}
				onChangeValue={onChangeValue('adminLabel')}
				value={element.adminLabel}
			/>
			<SwitchWithLabel
				label={__('admin only')}
				onChangeValue={onChangeValue('adminOnly')}
				isChecked={element.adminOnly}
			/>
			{element.type === 'html' ? (
				<>
					<RTEWithLabel
						label={__('content')}
						defaultValue={element.placeholder}
						// lets save the content to `placeholder` field because that field will be unused here
						onChangeValue={onChangeValue('placeholder')}
					/>
				</>
			) : (
				<>
					<TextInputWithLabel
						label={__('public label')}
						onChangeValue={onChangeValue('publicLabel')}
						value={element.publicLabel}
					/>
					{FIELDS_WITH_OPTIONS.includes(element.type) && (
						<FieldOptions element={element} label={__('options')} />
					)}
					<TextInputWithLabel
						label={__('placeholder')}
						onChangeValue={onChangeValue('placeholder')}
						value={element.placeholder}
					/>
					<TextInputWithLabel
						label={__('help text')}
						onChangeValue={onChangeValue('helpText')}
						value={element.helpText}
					/>
				</>
			)}
		</>
	);
};
