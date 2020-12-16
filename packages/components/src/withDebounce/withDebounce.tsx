import React, { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import type { InternalDebounceProps, WithDebounceProps } from './types';
import type { ForwardRefComponent } from '../types';
import { useIfMounted, usePrevious } from '@eventespresso/hooks';
import { AnyObject, noop } from '@eventespresso/utils';

/**
 * HOC to delay calling of `onChangeValue` passed to the `WrappedComponent`
 *
 * @param WrappedComponent The component to debounce the onchange handler for
 * @param isCheckbox Whether the component of a checkbox/switch
 */
const withDebounce = <P extends AnyObject, R extends any>(
	WrappedComponent: React.ComponentType<P>,
	isCheckbox = false
): ForwardRefComponent<P & WithDebounceProps, R> => {
	type Ref = React.Ref<R>;
	type RefProps = { forwardedRef: Ref } & WithDebounceProps & InternalDebounceProps;

	const WithDebounce: React.FC<P & RefProps> = ({
		forwardedRef,
		debounceDelay,
		onChangeValue,
		isChecked,
		value,
		...props
	}) => {
		// to use debounce, debounceDelay and onChangeValue should be passed
		const shouldDebounce = debounceDelay && typeof onChangeValue !== 'undefined';

		const fieldValue = isCheckbox ? isChecked : value;

		const [internalValue, setInternalValue] = useState(fieldValue);

		const { callback } = useDebouncedCallback(onChangeValue || noop, debounceDelay); // delay in MS

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
				if (shouldDebounce && fieldValue !== previousValue) {
					setInternalValue(fieldValue);
				}
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [fieldValue]);

		// if not debouncing, pass the external field value directly
		const valueToPass = shouldDebounce ? internalValue : fieldValue;

		return (
			<WrappedComponent
				{...(props as P)}
				value={valueToPass}
				isChecked={isCheckbox ? valueToPass : undefined}
				onChangeValue={shouldDebounce ? onChangeHandler : onChangeValue}
				ref={forwardedRef}
			/>
		);
	};

	return React.forwardRef((props: P, ref: Ref) => {
		return <WithDebounce {...props} forwardedRef={ref} />;
	});
};

export default withDebounce;
