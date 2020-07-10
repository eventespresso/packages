import React, { useCallback } from 'react';

import { EspressoForm } from '@eventespresso/form';
import useDatetimeFormConfig from './useDateFormConfig';
import { useDatetimeMutator } from '@eventespresso/edtr-services';
import type { EditDatetimeProps } from './types';

const EditDatetime: React.FC<EditDatetimeProps> = ({ datetime, onClose }) => {
	const { updateEntity } = useDatetimeMutator();

	const onSubmit = useCallback(
		(fields) => {
			updateEntity(fields);

			onClose();
		},
		[onClose, updateEntity]
	);

	const formConfig = useDatetimeFormConfig(datetime?.id, { onSubmit });

	return <EspressoForm {...formConfig} />;
};

export default EditDatetime;
