import React from 'react';
// import { __ } from '@wordpress/i18n';
// import { FormSpy } from '@eventespresso/form';

import { ButtonRow, Next, Previous } from '@eventespresso/components';

import { EditDatetimeRecurrence } from '../EditDatetimeRecurrence';

import Steps from './Steps';

import { ContentBodyProps } from './types';

const ContentBody: React.FC<ContentBodyProps> = ({ current, datetime }) => {
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
					<EditDatetimeRecurrence datetime={datetime} />
				</>
			)}

			{/* {current === 1 && <></>} */}
		</div>
	);
	// }}
	// </FormSpy>
	// );
};

export default ContentBody;
