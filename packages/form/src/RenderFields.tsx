import React from 'react';

import RenderField from './RenderField';
import type { RenderFieldsProps } from './types';

const RenderFields: React.FC<RenderFieldsProps> = ({ fields, locale, namespace }) => {
	return (
		<div>
			{fields.map(({ name, ...fieldProps }, key) => {
				const fieldName = namespace ? `${namespace}.${name}` : name;
				return <RenderField key={key} {...fieldProps} locale={locale} name={fieldName} />;
			})}
		</div>
	);
};

export default RenderFields;
