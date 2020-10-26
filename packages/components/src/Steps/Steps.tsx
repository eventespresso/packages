import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';
import { __ } from '@eventespresso/i18n';

import { Heading } from '../Heading';
import type { StepsProps } from './types';
import './style.scss';

const Steps: React.FC<StepsProps> = ({
	children,
	compact,
	current = 0,
	initial = 0,
	orientation = 'inline',
	showStepNumber,
	...props
}) => {
	const wrapperClassName = classNames(
		props.className,
		compact && `ee-form-steps__wrapper--compact`,
		'ee-form-steps__wrapper'
	);

	const listClassName = classNames(
		'ee-form-steps',
		compact && `ee-form-steps--compact`,
		`ee-form-steps--${orientation}`
	);

	const heading = props.heading ?? __('Steps');

	return (
		<div className={wrapperClassName}>
			<Heading as='h3'>{heading}</Heading>
			<ul className={listClassName}>
				{Children.map(children, (child: any, index) => {
					const stepNumber = initial + index;
					const childProps = {
						...props,
						...(stepNumber === current && { 'aria-current': 'step' }),
						active: stepNumber === current,
						stepIndex: stepNumber,
						stepNumber: `${stepNumber + 1}`,
						showStepNumber,
					};

					return cloneElement(child, childProps);
				})}
			</ul>
		</div>
	);
};

export default Steps;
