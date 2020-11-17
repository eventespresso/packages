import React from 'react';

import { SimpleTextEditor as SimpleTextEditorAdapter } from '@eventespresso/rich-text-editor';
import withoutMetaProp from './withoutMetaProp';
import type { FieldRendererProps } from '../types';

const SimpleTextEditor: React.FC<FieldRendererProps> = ({ input, ...props }) => {
	return (
		<SimpleTextEditorAdapter
			{...input}
			{...props}
			// make the component uncontrolled for increased performance
			defaultValue={input.value}
			value={null}
		/>
	);
};

export default withoutMetaProp(SimpleTextEditor);
