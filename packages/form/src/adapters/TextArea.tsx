import React from 'react';

import { TextArea as AdaptedTextArea } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const TextArea: React.FC<FieldRendererProps> = ({ input, ...props }) => {
	return <AdaptedTextArea {...input} {...props} />;
};

export default TextArea;
