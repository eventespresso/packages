import { __ } from '@eventespresso/i18n';
import { FormWithConfig } from '@eventespresso/ee-components';
import { Heading } from '@eventespresso/ui-components';

import useUpsellFormConfig from './useUpsellFormConfig';

export const UpsellForm: React.FC = () => {
	const formConfig = useUpsellFormConfig();

	return (
		<>
			<Heading>{__('Upsell configuration')}</Heading>
			<FormWithConfig {...formConfig} />
		</>
	);
};
