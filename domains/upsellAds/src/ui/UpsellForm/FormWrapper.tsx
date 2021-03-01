import { useEffect, useState } from 'react';

import { Upsell } from '@eventespresso/ui-components';

const FormWrapper: React.FC<any> = ({ children, form }) => {
	const { values } = form.getState();
	const [previewState, setPreviewState] = useState(values);

	useEffect(() => {
		const unsubscribe = form.subscribe(
			(state) => {
				setPreviewState(state?.values);
			},
			{ values: true }
		);

		return unsubscribe;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{children}
			<Upsell {...previewState} templateId='base' />
		</>
	);
};

export default FormWrapper;
