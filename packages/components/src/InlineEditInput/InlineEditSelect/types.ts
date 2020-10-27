import type { InlineEditProps } from '@eventespresso/adapters';
import type { SelectInputProps } from '../../';

interface CommonProps extends Pick<SelectInputProps, 'onChange' | 'options' | 'value'> {}

export interface EditableSelectProps extends CommonProps, Pick<InlineEditProps, 'onSubmit'> {
	isEditing?: boolean;
}

export interface InlineEditSelectProps extends CommonProps {
	'aria-describedby'?: string;
}
