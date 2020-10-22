import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Editable as ChakraEditable } from '@chakra-ui/core';

import { usePrevious, useIfMounted } from '@eventespresso/hooks';
import InlineEditInput from './InlineEditInput';
import InlineEditPreview from './InlineEditPreview';
import type { InlineEditProps } from './types';

const InlineEdit: React.FC<InlineEditProps> = ({
	inputClassName,
	defaultValue,
	inputType,
	onChangeValue,
	value,
	placeholder = '',
	Preview,
	previewClassName,
	...props
}) => {
	const [currentValue, setCurrentValue] = useState(defaultValue || value);
	const [prevSubmitValue, setPrevSubmitValue] = useState(currentValue);

	const previousValue = usePrevious(value);
	const ifMounted = useIfMounted();

	useEffect(() => {
		// update value if updated from consumer
		ifMounted(() => {
			if (value !== previousValue) {
				setCurrentValue(value);
				setPrevSubmitValue(value);
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value]);

	const onSubmitHandler = useCallback<InlineEditProps['onSubmit']>(() => {
		// Update the curerntly submitted value
		setPrevSubmitValue(currentValue);

		if (typeof onChangeValue === 'function') {
			onChangeValue(currentValue);
		}
	}, [currentValue, onChangeValue]);

	const className = classNames('ee-inline-edit', inputClassName);

	return (
		<ChakraEditable
			{...props}
			className={previewClassName}
			onChange={setCurrentValue}
			onSubmit={onSubmitHandler}
			placeholder={placeholder}
			value={currentValue}
		>
			{({ isEditing, onCancel, onRequestEdit }) => {
				// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
				const onCancelEdit = () => {
					onCancel();
					// reset current value to what it was earlier
					setCurrentValue(prevSubmitValue);
				};

				return (
					<>
						<InlineEditPreview
							{...props}
							className={className}
							isEditing={isEditing}
							onRequestEdit={onRequestEdit}
							Preview={Preview}
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
