import { HelpIcon, HelpIconProps } from '@eventespresso/ui-components';

import './style.scss';

interface Props extends Pick<HelpIconProps, 'tooltipText'> {}

export const HelperText: React.FC<Props> = ({ tooltipText }) => {
	return tooltipText ? <HelpIcon clickable tooltipText={tooltipText} /> : null;
};
