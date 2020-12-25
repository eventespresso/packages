import React from 'react';
import { __ } from '@eventespresso/i18n';

import { IconButton } from '@eventespresso/ui-components';
import { PlusCircleFilled } from '@eventespresso/icons';

interface AddPriceModifierButtonProps {
	addPriceModifier: VoidFunction;
}

const AddPriceModifierButton: React.FC<AddPriceModifierButtonProps> = ({ addPriceModifier }) => (
	<IconButton
		icon={PlusCircleFilled}
		onClick={addPriceModifier}
		tooltip={__('add new price modifier after this row')}
	/>
);

export default AddPriceModifierButton;
