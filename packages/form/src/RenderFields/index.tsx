import React from 'react';
import classNames from 'classnames';

import RenderField from './RenderField';
import type { RenderFieldsProps } from '../types';

import './styles.scss';

const RenderFields: React.FC<RenderFieldsProps> = ({ fields, inline, namespace }) => {
	const className = classNames('ee-render-fields', inline && 'ee-render-fields--inline');

	return (
		<div className={className}>
			{fields.map(({ name, ...fieldProps }, key) => {
				const fieldName = namespace ? `${namespace}.${name}` : name;
				return <RenderField {...fieldProps} key={key} name={fieldName} />;
			})}
		</div>
	);
};

export default RenderFields;
