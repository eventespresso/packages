import React from 'react';
// import { __ } from '@wordpress/i18n';
// import { FormSpy } from '@eventespresso/form';

import { EditRecurrence } from '../EditRecurrence';
import EditDatetime from '../EditDatetime';

import Steps from './Steps';

import type { ContentBodyProps } from './types';
import { useDatetime, useStepsState } from '../../context';

const ContentBody: React.FC<ContentBodyProps> = () => {
	const { current } = useStepsState();
	const datetime = useDatetime();
	// const subscription = { submitting: true, hasValidationErrors: true, hasSubmitErrors: true };

	// return (
	// <FormSpy subscription={subscription}>
	// {({ form, hasSubmitErrors, hasValidationErrors, submitting }) => {
	// const isSaveDisabled = submitting || hasValidationErrors || hasSubmitErrors;

	return (
		<div>
			<Steps current={current} />
			{current === 0 && (
				<>
					<EditRecurrence />
				</>
			)}

			{current === 1 && <EditDatetime datetime={datetime} />}
		</div>
	);
	// }}
	// </FormSpy>
	// );
};

export default ContentBody;
