import { __ } from '@eventespresso/i18n';
import { TextInputWithLabel } from '@eventespresso/ui-components';

import { useUpdateElement } from '../useUpdateElement';

import type { FormElementProps } from '../../types';

export const Styles: React.FC<FormElementProps> = ({ element }) => {
	const onChangeValue = useUpdateElement(element);

	return (
		<>
			<TextInputWithLabel
				label={__('css class')}
				onChangeValue={onChangeValue('attributes.class')}
				value={element.attributes?.class}
			/>
			<TextInputWithLabel
				label={__('help text css class')}
				onChangeValue={onChangeValue('helpText.htmlClass')}
				value={element.helpText?.htmlClass}
			/>
		</>
	);
};
