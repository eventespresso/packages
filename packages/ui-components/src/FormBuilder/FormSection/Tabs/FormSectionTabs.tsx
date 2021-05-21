import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@eventespresso/adapters';

import { __ } from '@eventespresso/i18n';

import { Collapsible } from '../../../Collapsible';
import type { SettingsProps } from '../../types';
import { Settings } from './Settings';
import { Styles } from './Styles';

export const FormSectionTabs: React.FC<SettingsProps> = ({ formSection, open = false }) => {
	return (
		<Collapsible show={open}>
			<Tabs variant='enclosed' wrapperClassName='ee-form-settings__tabs'>
				<TabList>
					<Tab>{__('Settings')}</Tab>
					<Tab>{__('Styles')}</Tab>
					{/* <Tab>{__('Rules')}</Tab> */}
				</TabList>
				<TabPanels>
					<TabPanel>
						<Settings formSection={formSection} />
					</TabPanel>
					<TabPanel>
						<Styles formSection={formSection} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Collapsible>
	);
};
