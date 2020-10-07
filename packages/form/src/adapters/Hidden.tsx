import React from 'react';

import withoutMetaProp from './withoutMetaProp';
import type { FieldRendererProps } from '../types';

const Hidden: React.FC<FieldRendererProps> = ({ input, ...props }) => {
	return <input {...input} {...props} type='hidden' />;
};

export default withoutMetaProp(Hidden);
