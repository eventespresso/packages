import { useCallback, useMemo } from 'react';

import ReactSelect from 'react-select';
import { find, propEq } from 'ramda';

import type { SelectProps } from './types';

const Select: React.FC<SelectProps> = ({ value, options, label, onChange, id, ...props }) => {
	/**
	 * React Select expects `value` prop to be an object - { label: string; value: string }
	 * Lets create it from options array by finding the option with the same value
	 */
	const reactSelectValue = useMemo(() => {
		return find(propEq('value', value), options);
	}, [options, value]);

	const reactSelectOnChange = useCallback(
		(selectedOption) => {
			onChange?.(selectedOption?.value);
		},
		[onChange]
	);

	// match the markup with WP controls
	return (
		<div className='components-base-control'>
			<div className='components-base-control__field'>
				<label className='components-base-control__label' htmlFor={id}>
					{label}
				</label>
				<ReactSelect
					id={id}
					className='components-select-control__input'
					{...props}
					value={reactSelectValue}
					options={options}
					onChange={reactSelectOnChange}
				/>
			</div>
		</div>
	);
};

export default Select;
