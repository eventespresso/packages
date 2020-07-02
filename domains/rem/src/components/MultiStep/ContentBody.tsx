import React from 'react';
// import { __ } from '@wordpress/i18n';
// import { FormSpy } from '@eventespresso/form';

import { ButtonRow, Next, Previous } from '@eventespresso/components';
import type { Datetime } from '@eventespresso/edtr-services';
import { usePrevNext } from '@eventespresso/services';

import { EditDatetimeRecurrence } from '../EditDatetimeRecurrence';
import Steps from './Steps';

interface Props {
	datetime: Datetime;
}

const ContentBody: React.FC<Props> = ({ datetime }) => {
	const { current, prev, next } = usePrevNext();

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
					<ButtonRow rightAligned>
						<Next
							onClick={next}
							// isDisabled={isSaveDisabled}
						/>
					</ButtonRow>
				</>
			)}

			{current === 1 && (
				<>
					<ButtonRow rightAligned>
						<Previous onClick={prev} />
						{/* <Submit onClick={form.submit} isDisabled={isSubmitDisabled} /> */}
					</ButtonRow>
				</>
			)}
		</div>
	);
	// }}
	// </FormSpy>
	// );
};

export default ContentBody;
