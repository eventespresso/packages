import { FormHelperTextProps } from '@eventespresso/adapters';
import { HelpIcon } from '@eventespresso/ui-components';

import './style.scss';

export const HelperText: React.FC<FormHelperTextProps> = ({ tooltipText }) => {
	return tooltipText ? <HelpIcon clickable tooltipText={tooltipText} /> : null;
};
