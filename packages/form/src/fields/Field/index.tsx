import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Field as RFFField } from 'react-final-form';

import { formatInfinity, parseInfinity } from '@eventespresso/utils';
import FieldRenderer from '../../renderers/FieldRenderer';
import useShouldBeVisible from '../../hooks/useShouldBeVisible';
import type { FieldProps } from '../../types';

import './style.scss';

type RFFFieldProps = Partial<React.ComponentProps<typeof RFFField>>;

const Field: React.FC<FieldProps> = ({ conditions, parseAsInfinity, width = 'fullWidth', ...props }) => {
	const visible = useShouldBeVisible(conditions, props.name);
	const className = classnames(props.className, `ee-field--width-${width}`);
	console.log({ width });

	const extraProps: RFFFieldProps = useMemo(
		() =>
			parseAsInfinity
				? {
						// `format` will convert infinite value from form (like -1) to empty string
						// before it gets passed to the input
						format: (value: number) => formatInfinity(value),
						// `parse` will convert empty string from the field to infinite value (like -1)
						// before it is added to form values object
						parse: (value: any) => parseInfinity(value),
				  }
				: {},
		[parseAsInfinity]
	);

	return (
		visible && (
			<RFFField
				component={FieldRenderer}
				{...extraProps}
				{...props}
				className={className}
				type={props.fieldType}
			/>
		)
	);
};

export default Field;
