import React from 'react';
import { omit } from 'ramda';

import type { FieldRendererProps } from '../types';

const Hidden: React.FC<FieldRendererProps> = ({ input, ...props }) => {
	const propsWithoutMeta = omit(['meta'], props);

	return <input {...input} {...propsWithoutMeta} type='hidden' />;
};

export default Hidden;
