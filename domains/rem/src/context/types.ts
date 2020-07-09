import type { Datetime } from '@eventespresso/edtr-services';

import { PrevNext } from '@eventespresso/hooks';

export interface ExtraContextProps {
	onCloseModal?: VoidFunction;
}

export interface ProviderProps extends ExtraContextProps {
	datetime: Datetime;
}

export interface ContextProps extends ExtraContextProps {
	datetime: Datetime;
	stepState: PrevNext;
}

export interface WithContextProps extends ExtraContextProps {
	datetime: Datetime;
}
