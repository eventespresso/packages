import { RadioGroup } from '@eventespresso/ui-components';

import withoutMetaProp from './withoutMetaProp';
import type { FieldRendererProps } from '../types';

const RadioField: React.FC<FieldRendererProps> = ({ input, options, ...props }) => {
	return <RadioGroup {...input} {...props} options={options} />;
};

export default withoutMetaProp(RadioField);
