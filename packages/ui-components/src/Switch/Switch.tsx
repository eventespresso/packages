import classNames from 'classnames';

import { Switch as SwitchAdapter } from '@eventespresso/adapters';
import { withLabel } from '../withLabel';
import { withDebounce } from '../withDebounce';
import type { SwitchProps } from './types';

import './style.scss';

export const SwitchWithOutLabel: React.FC<SwitchProps> = (props) => {
	const className = classNames('ee-switch', props.className);

	return <SwitchAdapter as='div' {...props} className={className} />;
};

export default withDebounce(withLabel(SwitchWithOutLabel), 'isChecked');
