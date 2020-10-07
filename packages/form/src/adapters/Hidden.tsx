import React from 'react';

import type { FieldRendererProps } from '../types';

const Hidden: React.FC<FieldRendererProps> = ({ input, ...rest }) => {
	return <input {...input} {...rest} type='hidden' />;
};

export default Hidden;
