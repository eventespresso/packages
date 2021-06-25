import { __ } from '@eventespresso/i18n';
import { TextInputWithLabel, TextareaWithLabel } from '@eventespresso/ui-components';

import { useUpdateElement } from '../useUpdateElement';

import type { FormElementProps } from '../../types';

export const Styles: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<TextInputWithLabel
				label={__('css class')}
				onChangeValue={onChangeValue('htmlClass')}
				value={element.htmlClass}
			/>
			<TextInputWithLabel
				label={__('help text css class')}
				onChangeValue={onChangeValue('helpClass')}
				value={element.helpClass}
			/>
			<TextareaWithLabel
				label={__('custom css')}
				onChangeValue={onChangeValue('customCss')}
				value={element.customCss}
			/>
		</>
	);
};
