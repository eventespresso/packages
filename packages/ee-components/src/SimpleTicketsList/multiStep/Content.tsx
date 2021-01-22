import { FormWithConfig } from '../../';
import useTicketFormConfig from '../useTicketFormConfig';
import ContentWrapper from './ContentWrapper';
import type { ContentProps } from './types';

const Content: React.FC<ContentProps> = ({ entity, onSubmit, onClose }) => {
	const formConfig = useTicketFormConfig(entity, { onSubmit });

	return <FormWithConfig {...formConfig} formWrapper={ContentWrapper as any} onClose={onClose} />;
};

export default Content;
