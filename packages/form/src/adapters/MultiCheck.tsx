import { useMemo } from 'react';

import { MultiCheckbox } from '@eventespresso/ui-components';

import withoutMetaProp from './withoutMetaProp';
import type { FieldRendererProps } from '../types';

const MultiCheck: React.FC<FieldRendererProps> = ({ input, options, ...props }) => {
	const value = useMemo(() => input.value || [], [input.value]);

	return <MultiCheckbox {...input} {...props} options={options} value={value} />;
};

export default withoutMetaProp(MultiCheck);
