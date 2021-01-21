import { FormSpy, FormApi } from '@eventespresso/form';

const subscription = {
	values: true,
	submitting: true,
	hasValidationErrors: true,
	hasSubmitErrors: true,
	pristine: true,
};

export type FormSubscriptionProps = {
	form?: FormApi;
	isSaveDisabled?: boolean;
	pristine?: boolean;
};

export const withFormSubscription = <P extends FormSubscriptionProps>(FormComponent: React.ComponentType<P>) => {
	const WithFormSpy: React.FC<P> = ({ ...props }) => (
		<FormSpy subscription={subscription}>
			{({ form, hasSubmitErrors, hasValidationErrors, submitting, pristine }) => {
				const isSaveDisabled = submitting || hasValidationErrors || hasSubmitErrors;

				return <FormComponent {...props} form={form} isSaveDisabled={isSaveDisabled} pristine={pristine} />;
			}}
		</FormSpy>
	);

	return WithFormSpy;
};
