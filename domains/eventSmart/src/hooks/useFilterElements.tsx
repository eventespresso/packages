import { useEffect } from 'react';

import { hooks, Filters } from '@eventespresso/edtr-services';
import { Link } from '@eventespresso/ui-components';
import { __ } from '@eventespresso/i18n';

import { NAMESPACE } from '../constants';
import { useCanUseAdvancedEditor } from './useCanUseAdvancedEditor';

const addSingleDate: keyof Filters = 'eventEditor.addSingleDate.button';

/**
 * A custom hook to replace different UI elements
 */
export const useFilterElements = (): void => {
	const canUseEdtr = useCanUseAdvancedEditor();

	useEffect(() => {
		hooks.addFilter(addSingleDate, NAMESPACE, (jsx) => {
			return !canUseEdtr ? (
				<Link href='https://eventsmart.com/pricing' target='_blank'>
					{__('UPGRADE NOW')}
				</Link>
			) : (
				jsx
			);
		});

		// housekeeping
		return () => {
			hooks.removeFilter(addSingleDate, NAMESPACE);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
