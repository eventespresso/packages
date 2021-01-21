import { useMemo } from 'react';

import { FormWithConfig } from '@eventespresso/ee-components';

import useDatetimeFormConfig from '../useDateFormConfig';
import ContentWrapper from './ContentWrapper';
import type { ContentProps } from './types';

const Content: React.FC<ContentProps> = ({ entityId, onSubmit }) => {
	const config = useMemo(() => ({ onSubmit }), [onSubmit]);
	const formConfig = useDatetimeFormConfig(entityId || 'NEW_DATE', config);

	return <FormWithConfig {...formConfig} formWrapper={ContentWrapper} />;
};

export default Content;
