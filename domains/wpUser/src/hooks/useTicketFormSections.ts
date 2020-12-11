import { useEffect } from 'react';

import { __ } from '@eventespresso/i18n';
import { hooks, Filters } from '@eventespresso/edtr-services';
import { Groups } from '@eventespresso/icons';

import { NAMESPACE } from '../constants';
import useCapabilityOptions from './useCapabilityOptions';

const filterName: keyof Filters = 'eventEditor.ticketForm.sections';

/**
 * A custom hook to to add WP User section to Ticket edit form
 */
const useTicketFormSections = (): void => {
	const capabilityOptions = useCapabilityOptions();
	useEffect(() => {
		hooks.addFilter(filterName, NAMESPACE, (sections) => {
			return [
				...sections,
				{
					name: 'wp-users',
					icon: Groups,
					title: __('WP Users'),
					fields: [
						{
							name: 'capabilityRequired',
							label: __('Ticket Capability Requirement'),
							fieldType: 'select',
							options: capabilityOptions,
							info: __(
								'It enables you to set restrictions on who can purchase the ticket option. This is an excellent way to create "Member Only" type discounts to people visiting your site.'
							),
						},
						{
							name: 'customCapabilityRequired',
							label: __('Custom Capability'),
							fieldType: 'text',
							// display this field conditionally
							// i.e. if 'custom' is selected in above
							conditions: [
								{
									field: 'capabilityRequired',
									compare: '=',
									value: 'custom',
								},
							],
							maxWidth: 300,
						},
					],
				},
			] as typeof sections;
		});

		// housekeeping
		return () => hooks.removeFilter(filterName, NAMESPACE);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};

export default useTicketFormSections;
