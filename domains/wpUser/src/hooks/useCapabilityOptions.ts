import { useMemo } from 'react';

import { __ } from '@eventespresso/i18n';
import type { OptionsType } from '@eventespresso/adapters';

const useCapabilityOptions = (): OptionsType => {
	return useMemo(() => {
		const domCapabilityOptions = window.eventEspressoData?.wpUserData?.capabilityOptions;
		/**
		 * Convert 👇👇👇
		 * {
		 * 	Standard: {
		 * 		none: 'none',
		 * 		read: 'Read Capabilities',
		 * 	},
		 * };
		 *
		 * to 👇👇👇
		 * [
		 * 	{
		 * 		label: 'Standard',
		 * 		options: [
		 * 			{ value: 'none', label: 'none' },
		 * 			{ value: 'read', label: 'Read Capabilities' },
		 * 		],
		 * 	},
		 * ];
		 */
		const dynamiccapabilityOptions = Object.entries(domCapabilityOptions).map(([optgroup, options]) => {
			return {
				label: optgroup,
				options: Object.entries(options).map(([value, label]) => ({ value, label })),
			};
		});

		return [
			...dynamiccapabilityOptions,
			{
				label: __('Custom'),
				options: [
					{
						value: 'custom',
						label: __('Custom capability'),
					},
				],
			},
		];
	}, []);
};

export default useCapabilityOptions;
