import React from 'react';
import { __ } from '@wordpress/i18n';

import { SelectInput } from '@eventespresso/components';
import { useMemoStringify } from '@eventespresso/hooks';

type Props = {
	value: string;
	setValue: (value: string) => void;
};
const Select: React.FC<Props> = React.memo(({ value, setValue }) => {
	const options = useMemoStringify([
		{
			value: '',
			label: __('bulk actions'),
		},
		{
			value: 'edit-details',
			label: __('edit datetime details'),
		},
		{
			value: 'delete',
			label: __('delete datetimes'),
		},
	]);
	return <SelectInput value={value} options={options} onChangeValue={setValue} />;
});

export default Select;
