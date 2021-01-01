import { forwardRef } from 'react';
import classNames from 'classnames';

import type { AnyObject } from '@eventespresso/utils';
import type { WithLabelProps } from './types';
import type { ForwardRefComponent } from '../types';
import './style.scss';

const withLabel = <P extends AnyObject>(
	WrappedComponent: React.ComponentType<P>,
	LabelTag: React.ElementType = 'label'
): ForwardRefComponent<P & WithLabelProps, typeof WrappedComponent> => {
	type Ref = React.Ref<typeof WrappedComponent>;
	type RefProps = { forwardedRef: Ref };

	const WithLabel: React.FC<P & WithLabelProps & RefProps> = ({
		forwardedRef,
		label,
		labelClassName,
		labelPosition = 'top-left',
		...props
	}) => {
		const className = classNames(
			'ee-input__wrapper',
			labelClassName,
			label && 'ee-input-label__wrapper',
			label && labelPosition && `ee-input-label__wrapper--${labelPosition}`
		);

		const id = props.id && 'ee-' + props.id;

		return label ? (
			<div className={className}>
				<LabelTag className='ee-input-label' htmlFor={LabelTag === 'label' ? id : null}>
					{label}
				</LabelTag>
				<WrappedComponent {...(props as P)} aria-label={label} id={id} ref={forwardedRef} />
			</div>
		) : (
			<WrappedComponent {...(props as P)} ref={forwardedRef} id={id} />
		);
	};

	const ForwardedComponentWithLabel = (props: P, ref: Ref) => {
		return <WithLabel {...props} forwardedRef={ref} />;
	};

	return forwardRef(ForwardedComponentWithLabel);
};

export default withLabel;
