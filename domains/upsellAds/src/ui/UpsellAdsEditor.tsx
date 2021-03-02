import { useIsRehydrated } from '@eventespresso/data';

import { UpsellForm } from './UpsellForm';
import Init from './Init';

import './styles.scss';

export const UpsellAdsEditor: React.FC = () => {
	const [isRehydrated] = useIsRehydrated();

	return isRehydrated ? <UpsellForm /> : <Init />;
};
