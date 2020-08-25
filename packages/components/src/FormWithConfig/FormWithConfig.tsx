import React from 'react';

import { EspressoForm, EspressoFormProps, FormConfig } from '@eventespresso/form';
import { useConfig } from '@eventespresso/services';
import { AnyObject } from '@eventespresso/utils';
import { useMemoStringify } from '@eventespresso/hooks';

const FormWithConfig = <FormValues extends AnyObject>(props: EspressoFormProps<FormValues>): JSX.Element => {
	const { dateTimeFormats, locale } = useConfig();

	const config = useMemoStringify<FormConfig>({ ...dateTimeFormats, locale: locale.user });

	return <EspressoForm config={config} {...((props as unknown) as any)} />;
};

export default FormWithConfig;
