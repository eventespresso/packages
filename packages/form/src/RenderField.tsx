import React from 'react';

import { Field, Group, Repeatable } from './fields';
import type { RenderFieldProps } from './types';

const RenderField: React.FC<RenderFieldProps> = (props) => {
	const { fieldType } = props;

	if (!fieldType) {
		return null;
	}

	const { isRepeatable, ...rest } = props;

	if (isRepeatable) {
		return <Repeatable {...rest} />;
	}

	if (fieldType === 'group') {
		return <Group {...rest} />;
	}

	return <Field {...rest} />;
};

export default RenderField;
