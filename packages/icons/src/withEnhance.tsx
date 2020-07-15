import React, { forwardRef, PropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import classNames from 'classnames';

import { IconProps, IconSize } from './types';

import './style.scss';

export type ForwardRefComponent<P, C> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<C>>;

const withEnhance = <P extends IconProps>(
	WrappedComponent: React.ComponentType<P>
): ForwardRefComponent<P, typeof WrappedComponent> => {
	type Ref = React.Ref<typeof WrappedComponent>;
	type EnhanceProps = { forwardedRef?: Ref; noMargin?: boolean; size?: IconSize };

	const WithEnhance: React.FC<P & EnhanceProps> = ({ forwardedRef, noMargin, size, ...props }) => {
		const className = classNames(
			'ee-svg',
			size && `ee-icon--${size}`,
			noMargin && 'ee-icon--no-margin',
			props.className
		);

		return <WrappedComponent {...(props as P)} className={className} ref={forwardedRef} />;
	};

	const ForwardedComponentWithEnhance = (props: P & EnhanceProps, ref: Ref) => {
		return <WithEnhance {...props} forwardedRef={ref} />;
	};

	return forwardRef(ForwardedComponentWithEnhance);
};

export default withEnhance;
