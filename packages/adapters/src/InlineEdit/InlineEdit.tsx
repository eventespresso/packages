import React, { useCallback, useEffect, useState } from 'react';
import { Editable as ChakraEditable } from '@chakra-ui/core';

import type { InlineEditProps } from './types';
import InlineEditInput from './InlineEditInput';
import InlineEditPreview from './InlineEditPreview';
import usePrevious from '../../../services/src/hooks/usePrevious'; // to avoid external dep

const InlineEdit: React.FC<InlineEditProps> = ({
	defaultValue,
	inputType,
	onChangeValue,
	value,
	placeholder = '',
	...props
}) => {
	const [currentValue, setCurrentValue] = useState(defaultValue || value);
	const [prevSubmitValue, setPrevSubmitValue] = useState(currentValue);

	const previousValue = usePrevious(value);

	useEffect(() => {
		// update value if updated from consumer
		if (value !== previousValue) {
			setCurrentValue(value);
			setPrevSubmitValue(value);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const onSubmitHandler = useCallback<InlineEditProps['onSubmit']>(() => {
		// Update the curerntly submitted value
		setPrevSubmitValue(currentValue);

		if (typeof onChangeValue === 'function') {
			onChangeValue(currentValue);
		}
	}, [currentValue, onChangeValue]);

	return (
		<ChakraEditable
			{...props}
			onChange={setCurrentValue}
			onSubmit={onSubmitHandler}
			placeholder={placeholder}
			value={currentValue}
		>
			{({ isEditing, onCancel, onRequestEdit }) => {
				const onCancelEdit = () => {
					onCancel();
					// reset current value to what it was earlier
					setCurrentValue(prevSubmitValue);
				};

				return (
					<>
						<InlineEditPreview
							{...props}
							isEditing={isEditing}
							onRequestEdit={onRequestEdit}
							value={currentValue}
						/>
						<InlineEditInput inputType={inputType} setValue={setCurrentValue} onCancel={onCancelEdit} />
					</>
				);
			}}
		</ChakraEditable>
	);
};

export default InlineEdit;
