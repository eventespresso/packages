import React, { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import type { DateItemProps } from '../types';
import { useDatetimeMutator } from '@eventespresso/edtr-services';
import { InlineEditTextArea } from '@eventespresso/components';
import { getPropsAreEqual } from '@eventespresso/services';

interface EditableDescProps extends DateItemProps {
	className?: string;
}

const EditableDesc: React.FC<EditableDescProps> = ({ entity: datetime, className }) => {
	const { updateEntity } = useDatetimeMutator(datetime.id);

	const onChangeDesc = useCallback(
		(description: string): void => {
			if (description !== datetime.description) {
				updateEntity({ description });
			}
		},
		[datetime.description, updateEntity]
	);

	const tooltip = __('edit description...');

	const dateDesc = datetime.description || tooltip;

	return <InlineEditTextArea className={className} onChangeValue={onChangeDesc} tooltip={tooltip} value={dateDesc} />;
};

export default React.memo(EditableDesc, getPropsAreEqual(['entity', 'description']));
