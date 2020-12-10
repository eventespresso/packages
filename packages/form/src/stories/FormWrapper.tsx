import React from 'react';

import { FormSpy } from '../';

const subscription = { submitting: true, hasValidationErrors: true, hasSubmitErrors: true };

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const ContentBody: React.FC = ({ children }) => {
	return (
		<FormSpy subscription={subscription}>
			{() => {
				return <div>{children}</div>;
			}}
		</FormSpy>
	);
};

export default ContentBody;
