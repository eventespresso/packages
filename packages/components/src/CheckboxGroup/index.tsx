import React from 'react';

// import { Checkbox } from '@eventespresso/adapters';

import { CheckboxGroupProps, CheckboxOptionType } from './types';

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ defaultCheckedOptions, onChange, value, ...props }) => {
	const getOptions = () => {
		return (props.options as Array<CheckboxOptionType>).map((option) => {
			if (typeof option === 'string') {
				return {
					label: option,
					value: option,
				} as CheckboxOptionType;
			}
			return option;
		});
	};

	const options = getOptions();

	return (
		<div>
			{options.map((option) => (
				<>
					<input
						key={option.value.toString()}
						id='btn-check'
						onChange={onChange}
						type='checkbox'
						checked={option.checked}
					/>
					<label for='btn-check'>{option.label}</label>
				</>
			))}
		</div>
	);
};

export default CheckboxGroup;
