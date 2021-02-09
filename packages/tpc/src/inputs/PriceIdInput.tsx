import { __ } from '@eventespresso/i18n';
import type { PriceModifierProps } from '../types';

const PriceIdInput: React.FC<PriceModifierProps> = ({ price }) => {
	return <span aria-label={__('price id')}>{price.dbId || 0}</span>;
};

export default PriceIdInput;
