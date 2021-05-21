import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@eventespresso/adapters';

import { __ } from '@eventespresso/i18n';

import { Collapsible } from '../../../Collapsible';
import type { SettingsProps } from '../../types';
import { Settings } from './Settings';
import { Styles } from './Styles';
import { Validation } from './Validation';

export const FormElementTabs: React.FC<SettingsProps> = ({ element, open = false }) => {
	return (
		<Collapsible show={open}>
			<Tabs variant='enclosed' wrapperClassName='ee-form-settings__tabs'>
				<TabList>
					<Tab>{__('Settings')}</Tab>
					<Tab>{__('Validation')}</Tab>
					<Tab>{__('Styles')}</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Settings element={element} />
					</TabPanel>
					<TabPanel>
						<Validation element={element} />
					</TabPanel>
					<TabPanel>
						<Styles element={element} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Collapsible>
	);
};
