import { useEffect } from 'react';

import { __ } from '@eventespresso/i18n';
import { hooks, Filters } from '@eventespresso/edtr-services';
import { Groups } from '@eventespresso/icons';

import { NAMESPACE } from '../constants';

const filterName: keyof Filters = 'eventEditor.ticketForm.sections';

const capabilityTypeOptions = [
	{
		value: 'read',
		label: __('Read'),
	},
	{
		value: 'custom',
		label: __('Custom'),
	},
];

// TODO read these options from DOM
const capabilityValueOptions = [
	{
		value: '',
		label: '...',
	},
	{
		value: 'access_s2member_level0',
		label: __('Level 0'),
	},
	{
		value: 'access_s2member_level1',
		label: __('Level 1'),
	},
	{
		value: 'access_s2member_level2',
		label: __('Level 2'),
	},
	{
		value: 'access_s2member_level3',
		label: __('Level 3'),
	},
	{
		value: 'access_s2member_level4',
		label: __('Level 4'),
	},
];

/**
 * A custom hook to to add WP User section to Ticket edit form
 */
const useTicketFormSections = (): void => {
	useEffect(() => {
		// make sure to remove the previously registered hook
		hooks.removeFilter(filterName, NAMESPACE);

		hooks.addFilter('eventEditor.ticketForm.sections', NAMESPACE, (sections) => {
			return [
				...sections,
				{
					name: 'wp-users',
					icon: Groups,
					title: __('WP Users'),
					fields: [
						{
							name: 'capabilityRequiredType',
							label: __('Ticket Capability Requirement'),
							fieldType: 'select',
							options: capabilityTypeOptions,
						},
						{
							name: 'capabilityRequired',
							label: __('Custom Capability'),
							fieldType: 'select',
							options: capabilityValueOptions,
							// display this field conditionally
							// i.e. if 'custom' is selected in above
							conditions: [
								{
									field: 'capabilityRequiredType',
									compare: '=',
									value: 'custom',
								},
							],
						},
					],
				},
			] as typeof sections;
		});

		// housekeeping
		return () => hooks.removeFilter(filterName, NAMESPACE);
	}, []);
};

export default useTicketFormSections;
