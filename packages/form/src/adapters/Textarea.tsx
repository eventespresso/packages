import React from 'react';

import { Textarea as AdaptedTextarea } from '@eventespresso/ui-components';

import type { FieldRendererProps } from '../types';

const Textarea: React.FC<FieldRendererProps> = ({ input, ...props }) => {
	return <AdaptedTextarea {...input} {...props} />;
};

export default Textarea;
