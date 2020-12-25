import { TextInput } from '@eventespresso/ui-components';

import type { FieldRendererProps } from '../types';

const Text: React.FC<FieldRendererProps> = ({ htmlType = 'text', input, ...props }) => {
	return <TextInput {...input} {...props} type={htmlType} />;
};

export default Text;
