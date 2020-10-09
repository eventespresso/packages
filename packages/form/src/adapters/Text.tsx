import React from 'react';

import { TextInput } from '@eventespresso/adapters';
import type { FieldRendererProps } from '../types';

const Text: React.FC<FieldRendererProps> = ({ htmlType = 'text', input, meta: { error, submitError }, ...rest }) => {
	const isInvalid = Boolean(error?.length || submitError?.length);

	return <TextInput {...input} isInvalid={isInvalid} {...rest} />;
};

export default Text;
