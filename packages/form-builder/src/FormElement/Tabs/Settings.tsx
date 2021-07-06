import { __ } from '@eventespresso/i18n';
import { SwitchWithLabel, TextInputWithLabel, withLabel } from '@eventespresso/ui-components';
import { SimpleTextEditor } from '@eventespresso/rich-text-editor';

import type { FormElementProps } from '../../types';
import FieldOptions from './FieldOptions';
import { FIELDS_WITH_OPTIONS } from '../../constants';
import { useUpdateElement } from '../useUpdateElement';
import { InputType } from './InputType';

const RTEWithLabel = withLabel(SimpleTextEditor);

export const Settings: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			{
				// HTML doesn't need a public label
				element.type !== 'HTML' && (
					<TextInputWithLabel
						label={__('public label')}
						onChangeValue={onChangeValue('label.publicLabel')}
						value={element.label?.publicLabel}
					/>
				)
			}
			<TextInputWithLabel
				label={__('admin label')}
				onChangeValue={onChangeValue('label.adminLabel')}
				value={element.label?.adminLabel}
			/>
			{element.type === 'HTML' ? (
				<>
					<RTEWithLabel
						label={__('content')}
						defaultValue={element.attributes?.placeholder}
						// lets save the content to `placeholder` field because that field will be unused here
						onChangeValue={onChangeValue('attributes.placeholder')}
					/>
				</>
			) : (
				<>
					{FIELDS_WITH_OPTIONS.includes(element.type) ? (
						<FieldOptions element={element} label={__('options')} />
					) : (
						<TextInputWithLabel
							label={__('placeholder')}
							onChangeValue={onChangeValue('attributes.placeholder')}
							value={element.attributes?.placeholder}
						/>
					)}
					<SwitchWithLabel
						label={__('admin only')}
						onChangeValue={onChangeValue('adminOnly')}
						isChecked={element.adminOnly}
					/>
					<TextInputWithLabel
						label={__('help text')}
						onChangeValue={onChangeValue('helpText.helpText')}
						value={element.helpText?.helpText}
					/>
					<InputType element={element} />
				</>
			)}
		</>
	);
};
