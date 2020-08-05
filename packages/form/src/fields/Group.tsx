import React from 'react';
import classNames from 'classnames';

import type { FieldProps } from '../types';
import Field from './Field';
import FieldRenderer from '../renderers/FieldRenderer';
import useShouldBeVisible from '../hooks/useShouldBeVisible';

const Group: React.FC<FieldProps> = ({
	subFields,
	label,
	name: groupName,
	before,
	after,
	conditions,
	formControlProps,
}) => {
	const visible = useShouldBeVisible(conditions, groupName);
	if (subFields.length && visible) {
		// className for the group
		const className = formControlProps?.className;
		const groupClassName = classNames('field-group-items', className);
		// className for the group wrapper
		const wrapperClassName = classNames('field-group-wrapper', {
			[`${className}-wrapper`]: className,
		});
		return (
			<div className={wrapperClassName}>
				<h5 className='field-group-label'>{label}</h5>
				{before}
				<div className={groupClassName}>
					{subFields.map(({ name: fieldname, fieldType, ...props }, i) => {
						const name = `${groupName}.${fieldname}`;
						return (
							<div className='field-group-item' key={name + i}>
								<Field component={FieldRenderer} {...props} fieldType={fieldType} name={name} />
							</div>
						);
					})}
				</div>
				{after}
			</div>
		);
	}
	return null;
};

export default Group;
