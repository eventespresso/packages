import classNames from 'classnames';

import { Switch as SwitchAdapter } from '@eventespresso/adapters';
import type { SwitchProps } from './types';
import { withLabel } from '../withLabel';
import { withDebounce } from '../withDebounce';

const Switch: React.FC<SwitchProps> = (props) => {
	const className = classNames('ee-switch', props.className);

	return <SwitchAdapter {...props} className={className} />;
};

export default withDebounce(withLabel(Switch, 'legend'), true);
