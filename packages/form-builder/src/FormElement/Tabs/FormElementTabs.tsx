import { memo } from 'react';

import { __ } from '@eventespresso/i18n';
import { Check, Palette, SettingsOutlined } from '@eventespresso/icons';
import { Collapsible, Tabs, TabList, TabPanels, Tab, TabPanel } from '@eventespresso/ui-components';
import { getPropsAreEqual } from '@eventespresso/utils';

import type { FormElementProps } from '../../types';
import { Settings } from './Settings';
import { Styles } from './Styles';
import { Validation } from './Validation';
import { useFormState } from '../../state';

export const FormElementTabs = memo<FormElementProps>(({ element }) => {
	const { isElementOpen } = useFormState();
	return (
		<Collapsible show={isElementOpen({ id: element.id })}>
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
						<Check className='ee-tab-icon-validation' />
						{__('Validation')}
					</Tab>
					{/* <Tab>
						<CheckList className='ee-tab-icon-rules' />
						{__('Rules')}
					</Tab> */}
				</TabList>
				<TabPanels>
					<TabPanel>
						<Settings element={element} />
					</TabPanel>
					<TabPanel>
						<Styles element={element} />
					</TabPanel>
					<TabPanel>
						<Validation element={element} />
					</TabPanel>
					{/* <TabPanel>
						<p>dont be bad person</p>
					</TabPanel> */}
				</TabPanels>
			</Tabs>
		</Collapsible>
	);
}, getPropsAreEqual([['element']]));
