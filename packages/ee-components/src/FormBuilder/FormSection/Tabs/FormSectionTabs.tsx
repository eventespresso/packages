import { __ } from '@eventespresso/i18n';
import { CheckList, Palette, SettingsOutlined } from '@eventespresso/icons';
import { Collapsible, Tabs, TabList, TabPanels, Tab, TabPanel } from '@eventespresso/ui-components';

import type { SettingsProps } from '../../types';
import { Settings } from './Settings';
import { Styles } from './Styles';

export const FormSectionTabs: React.FC<SettingsProps> = ({ formSection, open = false }) => {
	return (
		<Collapsible show={open}>
			<Tabs variant='enclosed' wrapperClassName='ee-form-settings__tabs'>
				<TabList>
					<Tab>
						<SettingsOutlined className='ee-tab-icon-settings' />
						{__('Settings')}
					</Tab>
					<Tab>
						<Palette className='ee-tab-icon-palette' />
						{__('Styles')}
					</Tab>
					<Tab>
						<CheckList className='ee-tab-icon-rules' />
						{__('Rules')}
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Settings formSection={formSection} />
					</TabPanel>
					<TabPanel>
						<Styles formSection={formSection} />
					</TabPanel>
					<TabPanel>
						<p>dont be bad person</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Collapsible>
	);
};
