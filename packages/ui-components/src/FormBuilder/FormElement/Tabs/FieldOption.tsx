import { __ } from '@eventespresso/i18n';
import { Trash } from '@eventespresso/icons';

import { Label } from '../../../Label';
import { FieldOptionProps } from '../../types';
import { TextInput } from '../../../text-input';
import { IconButton } from '../../../Button';

export const FieldOption: React.FC<FieldOptionProps> = ({ index, label, onChange, onRemove, value }) => {
	const hidden = index > 0;
	return (
		<div key={`${index}`} className='ee-field-option__wrapper'>
			<div className='ee-field-option'>
				<Label id={`ee-field-option-value-${index}`} label={__('value')} hidden={hidden} />
				<TextInput
					className='ee-field-option__value'
					id={`ee-field-option-value-${index}`}
					onChangeValue={onChange('value', index)}
					placeholder={__('value')}
					value={value}
				/>
			</div>
			<div className='ee-field-option'>
				<Label id={`ee-field-option-label-${index}`} label={__('label')} hidden={hidden} />
				<TextInput
					className='ee-field-option__label'
					id={`ee-field-option-label-${index}`}
					onChangeValue={onChange('label', index)}
					placeholder={__('label')}
					value={label as string}
				/>
			</div>
			<div className='ee-field-option'>
				<IconButton
					borderless
					className='ee-field-option__remove'
					aria-label={__('remove option')}
					icon={Trash}
					onClick={onRemove(index)}
					size='small'
					transparentBg
				/>
			</div>
		</div>
	);
};
