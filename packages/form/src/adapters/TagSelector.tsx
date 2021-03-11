import { TagSelector } from '@eventespresso/ui-components';
import { useMemo } from 'react';

import type { FieldRendererProps } from '../types';

const TagSelectorField: React.FC<FieldRendererProps> = ({ input, items, ...props }) => {
	// make sure the value is an array
	const value = useMemo(() => input.value || [], [input.value]);

	return <TagSelector {...props} {...input} items={items} value={value} />;
};

export default TagSelectorField;
