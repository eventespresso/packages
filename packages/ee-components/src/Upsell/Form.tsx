import { useMemo } from 'react';

import { FormWithConfig } from '../';

import useUpsellFormConfig from './useUpsellFormConfig';
import type { UpsellFormProps } from './types';

const Form: React.FC<UpsellFormProps> = ({ onClose, onSubmit }) => {
	const config = useMemo(() => ({ onSubmit }), [onSubmit]);
	const formConfig = useUpsellFormConfig(config);

	return <FormWithConfig {...formConfig} onClose={onClose} />;
};

export default Form;
