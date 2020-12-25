import { __ } from '@eventespresso/i18n';
import { usePriceTypes } from '@eventespresso/edtr-services';
import { getPriceModifiers } from '@eventespresso/predicates';
import { PriceField } from '../fields';
import type { PriceModifierProps } from '../types';

const PriceTypeInput: React.FC<PriceModifierProps> = ({ price }) => {
	const priceTypes = usePriceTypes();
	const modifierOptions = getPriceModifiers(priceTypes);
	const options = price.isBasePrice ? priceTypes : modifierOptions;

	return (
		<PriceField
			aria-label={__('price type')}
			component={'select'}
			// price type cannot be changed for base/default price
			disabled={price.isBasePrice || price.isDefault}
			field='priceType'
			price={price}
		>
			{options.map((option) => (
				<option key={option.id} value={option.id}>
					{option.name}
				</option>
			))}
		</PriceField>
	);
};

export default PriceTypeInput;
