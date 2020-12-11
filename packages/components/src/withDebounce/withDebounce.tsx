import React, { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import type { InternalDebounceProps, withDebounceProps } from './types';
import type { ForwardRefComponent } from '../types';
import { useIfMounted, usePrevious } from '@eventespresso/hooks';

/**
 * HOC to delay calling of `onChangeValue` passed to the `WrappedComponent`
 *
 * @param WrappedComponent The component to debounce the onchange handler for
 * @param isCheckbox Whether the component of a checkbox/switch
 */
const withDebounce = <P extends withDebounceProps>(
	WrappedComponent: React.ComponentType<P>,
	isCheckbox = false
): ForwardRefComponent<P, typeof WrappedComponent> => {
	type Ref = React.Ref<typeof WrappedComponent>;
	type RefProps = { forwardedRef: Ref } & InternalDebounceProps;

	const WithDebounce: React.FC<P & RefProps> = ({
		forwardedRef,
		debounceDelay,
		onChangeValue,
		isChecked,
		value,
		...props
	}) => {
		const fieldValue = isCheckbox ? isChecked : value;

		const [internalValue, setInternalValue] = useState(fieldValue);

		const { callback } = useDebouncedCallback(onChangeValue, debounceDelay); // delay in MS

		const onChangeHandler = useCallback<typeof onChangeValue>(
			(newValue, event) => {
				// set the value only if the field is controlled
				if (typeof internalValue !== 'undefined') {
					setInternalValue(newValue);
				}
				callback(newValue, event);
			},
			[callback, internalValue]
		);

		const previousValue = usePrevious(fieldValue);
		const ifMounted = useIfMounted();
		useEffect(() => {
			// update value if updated from consumer
			ifMounted(() => {
				if (fieldValue !== previousValue) {
					setInternalValue(fieldValue);
				}
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [fieldValue]);

		return (
			<WrappedComponent
				{...(props as P)}
				value={internalValue}
				isChecked={isCheckbox ? internalValue : undefined}
				onChangeValue={onChangeHandler}
				ref={forwardedRef}
			/>
		);
	};

	return React.forwardRef((props: P, ref: Ref) => {
		return <WithDebounce {...props} forwardedRef={ref} />;
	});
};

export default withDebounce;
