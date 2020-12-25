import { WarningTriangle } from '@eventespresso/icons';
import { InlineNotification } from './';

import type { InlineMessageProps } from './types';

export const WarningMessage: React.FC<InlineMessageProps> = ({ ...props }) => {
	return <InlineNotification {...props} icon={<WarningTriangle />} type='warning' />;
};
