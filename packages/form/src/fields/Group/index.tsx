import React from 'react';
import classNames from 'classnames';

import Field from '../Field';
import FieldRenderer from '../../renderers/FieldRenderer';
import useShouldBeVisible from '../../hooks/useShouldBeVisible';
import type { FieldProps } from '../../types';

import './styles.scss';

const Group: React.FC<FieldProps> = ({
	columns,
	subFields,
	label,
	name: groupName,
	before,
	after,
	conditions,
	formControlProps,
}) => {
	const visible = useShouldBeVisible(conditions, groupName);

	console.log({ columns });

	if (subFields.length && visible) {
		// className for the group
		const className = formControlProps?.className;
		const groupClassName = classNames('ee-field-group__items ee-row', className);
		const itemClassName = classNames('ee-field-group__item', columns && `ee-col--${columns}`);

		const wrapperClassName = classNames('ee-field-group__wrapper', {
			[`${className}-wrapper`]: className,
		});

		return (
			<div className={wrapperClassName}>
				{label && <h5 className='ee-field-group__label'>{label}</h5>}
				{before}
				<div className={groupClassName}>
					{subFields.map(({ name: fieldname, fieldType, ...props }, i) => {
						const name = `${groupName}.${fieldname}`;

						return (
							<div className={itemClassName} key={name + i}>
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
