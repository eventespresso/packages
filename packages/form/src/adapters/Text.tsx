import React from 'react';

import { TextInput } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const Text: React.FC<FieldRendererProps> = ({ htmlType = 'text', input, meta: { error, submitError }, ...rest }) => {
	return <TextInput {...input} isInvalid={error || submitError} type={htmlType} {...rest} />;
};

export default Text;
