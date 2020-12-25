import { forwardRef, useMemo } from 'react';

import classNames from 'classnames';

import type { AnyObject } from '@eventespresso/utils';
import { Tooltip } from '../';
import type { TooltipProps } from '@eventespresso/adapters';
import type { WithTooltipProps } from './types';
import type { ForwardRefComponent } from '../types';

import './style.scss';

const withTooltip = <P extends AnyObject>(
	WrappedComponent: React.ComponentType<P & WithTooltipProps>
): ForwardRefComponent<P & WithTooltipProps, typeof WrappedComponent> => {
	// Define ref type
	type Ref = React.Ref<typeof WrappedComponent>;
	type RefProps = { forwardedRef: Ref };
	const WithTooltip: React.ComponentType<P & WithTooltipProps & RefProps> = ({
		forwardedRef,
		showTooltipOnMobile = false,
		tooltip,
		tooltipProps: _tooltipProps,
		...props
	}) => {
		const noTooltip = !tooltip || props.buttonText === tooltip;

		let toolTipped: React.ReactNode;

		const tooltipProps = useMemo<TooltipProps>(() => {
			if (showTooltipOnMobile) {
				return { ..._tooltipProps, className: 'ee-mobile-help-text__tooltip' };
			}
			return _tooltipProps;
		}, [_tooltipProps, showTooltipOnMobile]);

		if (noTooltip) {
			return <WrappedComponent {...(props as P)} ref={forwardedRef} />;
		}

		if (showTooltipOnMobile) {
			const className = classNames({
				'ee-mobile-help-text': true,
				'ee-mobile-help-text--short': tooltip.length < 25,
				'ee-mobile-help-text--long': tooltip.length > 50,
			});
			toolTipped = (
				<div className='ee-mobile-help-text__btn-wrap'>
					<WrappedComponent aria-label={tooltip} {...(props as P)} ref={forwardedRef} tooltip={tooltip} />
					<div className={className}>{tooltip}</div>
				</div>
			);
		} else {
			toolTipped = (
				<WrappedComponent aria-label={tooltip} {...(props as P)} ref={forwardedRef} tooltip={tooltip} />
			);
		}

		return (
			<Tooltip {...tooltipProps} tooltip={tooltip}>
				{toolTipped}
			</Tooltip>
		);
	};

	const ForwardedComponentWithTooltip = (props: P, ref: Ref) => {
		return <WithTooltip {...props} forwardedRef={ref} />;
	};

	return forwardRef(ForwardedComponentWithTooltip);
};

export default withTooltip;
