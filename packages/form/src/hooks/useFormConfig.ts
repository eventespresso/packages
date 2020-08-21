import { useContext } from 'react';
import { FormConfigContext } from '../context';
import type { FormConfig } from '../types';

const useFormConfig = (): FormConfig => {
	return useContext(FormConfigContext);
};

export default useFormConfig;
