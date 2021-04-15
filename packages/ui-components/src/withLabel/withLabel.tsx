import { forwardRef } from 'react';
import classNames from 'classnames';

import type { AnyObject } from '@eventespresso/utils';
import type { WithLabelProps } from './types';
import type { ForwardRefComponent } from '../types';
import './style.scss';

const withLabel = <P extends AnyObject>(
	WrappedComponent: React.ComponentType<P>
): ForwardRefComponent<P & WithLabelProps, typeof WrappedComponent> => {
	type Ref = React.Ref<typeof WrappedComponent>;
	type RefProps = { forwardedRef: Ref };

	const WithLabel: React.FC<P & WithLabelProps & RefProps> = ({
		fontWeightNormal,
		forwardedRef,
		label,
		labelClassName,
		labelPosition = 'top-left',
		noPadding,
		...props
	}) => {
		const className = classNames(
			'ee-input__wrapper',
			labelClassName,
			label && 'ee-input-label__wrapper',
			label && labelPosition && `ee-input-label__wrapper--${labelPosition}`,
			fontWeightNormal && `ee-input-label__wrapper--font-weight-normal`,
			noPadding && `ee-input-label__wrapper--no-padding`
		);

		const id = props.id && 'ee-' + props.id;

		return label ? (
			<div className={className}>
				<label
					aria-label={props['aria-label'] || label}
					className='ee-input-label'
					id={`${id}-label`}
					htmlFor={id}
				>
					{label}
				</label>
				<WrappedComponent
					{...(props as P)}
					aria-label={null} // avoid duplicate aria-label
					aria-labelledby={`${id}-label`}
					ref={forwardedRef}
				/>
			</div>
		) : (
			<WrappedComponent {...(props as P)} ref={forwardedRef} />
		);
	};

	const ForwardedComponentWithLabel = (props: P, ref: Ref) => {
		return <WithLabel {...props} forwardedRef={ref} />;
	};

	return forwardRef(ForwardedComponentWithLabel);
};

export default withLabel;
