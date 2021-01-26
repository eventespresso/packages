import { HelpIcon, HelpIconProps } from '@eventespresso/ui-components';

import './style.scss';

interface Props extends Pick<HelpIconProps, 'id' | 'tooltipText'> {}

export const HelperText: React.FC<Props> = ({ id, tooltipText }) => {
	return tooltipText ? <HelpIcon clickable id={id} tooltipText={tooltipText} /> : null;
};
