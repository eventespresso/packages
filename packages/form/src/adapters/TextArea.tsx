import React from 'react';

import { TextArea as AdaptedTextArea } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const TextArea: React.FC<FieldRendererProps> = ({ input, meta: { error, submitError }, ...rest }) => {
	return <AdaptedTextArea {...input} isInvalid={error || submitError} {...rest} />;
};

export default TextArea;
