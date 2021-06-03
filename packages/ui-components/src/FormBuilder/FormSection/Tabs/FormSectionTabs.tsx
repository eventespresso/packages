import { __ } from '@eventespresso/i18n';
import { CheckList, Palette, SettingsOutlined } from '@eventespresso/icons';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '../../../Tabs';
import { useFormState } from '../../state';
import { Styles } from './Styles';
import { Collapsible } from '../../../';
import type { FormSectionProps } from '../../types';
import { Settings } from './Settings';

export const FormSectionTabs: React.FC<FormSectionProps> = ({ formSection }) => {
	const { isElementOpen } = useFormState();
	return (
		<Collapsible show={isElementOpen({ UUID: formSection.UUID })}>
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
