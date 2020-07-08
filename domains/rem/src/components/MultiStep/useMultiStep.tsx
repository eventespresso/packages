import React, { useMemo } from 'react';

import type { Datetime } from '@eventespresso/edtr-services';
import { usePrevNext } from '@eventespresso/hooks';

import ContentBody from './ContentBody';
import ContentFooter from './ContentFooter';

const useMultiStep = (datetime: Datetime): any => {
	const { current, prev, next } = usePrevNext();
	const multiStepContent = <ContentBody current={current} datetime={datetime} />;
	const multiStepFooter = <ContentFooter current={current} next={next} prev={prev} />;

	return useMemo<any>(
		() => ({
			multiStepContent,
			multiStepFooter,
		}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[current]
	);
};

export default useMultiStep;
