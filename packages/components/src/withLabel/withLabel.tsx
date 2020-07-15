import React from 'react';
import classNames from 'classnames';
import type { withLabelProps } from './types';
import { LabelPosition } from './types';
import type { ForwardRefComponent } from '../types';
import './style.scss';

const withLabel = <P extends withLabelProps>(
	WrappedComponent: React.ComponentType<P>
): ForwardRefComponent<P, typeof WrappedComponent> => {
	type Ref = React.Ref<typeof WrappedComponent>;
	type refProps = { forwardedRef: Ref };

	const WithLabel: React.FC<P & refProps> = ({
		forwardedRef,
		id,
		label,
		labelClassName,
		labelPosition = LabelPosition.TOP_LEFT,
		...props
	}) => {
		const className = classNames(
			'ee-input__wrapper',
			labelClassName,
			label && 'ee-input-label__wrapper',
			label && labelPosition && `ee-input-label__wrapper--${labelPosition}`
		);
		return label ? (
			<div className={className}>
				<label className='ee-input-label' htmlFor={id}>
					{label}
				</label>
				<WrappedComponent {...(props as P)} ref={forwardedRef} id={id} />
			</div>
		) : (
			<WrappedComponent {...(props as P)} ref={forwardedRef} id={id} />
		);
	};

	const ForwardedComponentWithLabel = (props: P, ref: Ref) => {
		return <WithLabel {...props} forwardedRef={ref} />;
	};

	return React.forwardRef(ForwardedComponentWithLabel);
};

export default withLabel;
