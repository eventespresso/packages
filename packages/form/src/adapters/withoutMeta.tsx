import React from 'react';
import { omit } from 'ramda';

import type { ForwardRefComponent } from '@eventespresso/components';
import type { FieldRendererProps } from '../types';

// Removes meta prop from being passed to DOM element.
const withoutMeta = <P extends FieldRendererProps>(
	WrappedComponent: React.ComponentType<P>
): ForwardRefComponent<P, typeof WrappedComponent> => {
	type Ref = React.Ref<typeof WrappedComponent>;
	type refProps = { forwardedRef: Ref };

	const WithoutMeta: React.FC<P & refProps> = ({ forwardedRef, ...props }) => {
		const propsWithoutMeta = omit(['meta'], props);
		return <WrappedComponent {...(propsWithoutMeta as P)} ref={forwardedRef} />;
	};

	const ForwardedComponentWithLabel = (props: P, ref: Ref) => {
		return <WithoutMeta {...props} forwardedRef={ref} />;
	};

	return React.forwardRef(ForwardedComponentWithLabel);
};

export default withoutMeta;
