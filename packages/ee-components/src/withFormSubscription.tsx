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
	hasErrors?: boolean;
	pristine?: boolean;
	submitting?: boolean;
};

export const withFormSubscription = <P extends FormSubscriptionProps>(FormComponent: React.ComponentType<P>) => {
	const WithFormSpy: React.FC<P> = ({ ...props }) => (
		<FormSpy subscription={subscription}>
			{({ form, hasSubmitErrors, hasValidationErrors, submitting, pristine }) => {
				const hasErrors = hasValidationErrors || hasSubmitErrors;

				return (
					<FormComponent
						{...props}
						form={form}
						hasErrors={hasErrors}
						pristine={pristine}
						submitting={submitting}
					/>
				);
			}}
		</FormSpy>
	);

	return WithFormSpy;
};
