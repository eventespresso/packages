import { Collapsible } from '../Collapsible';

import type { SettingsProps } from './types';

export const FormSectionSettings: React.FC<SettingsProps> = ({ formSection, open = false }) => (
	<Collapsible show={open}>
		<div className='ee-form-settings__tabs'>
			<p>tabs go here</p>
			<pre>{JSON.stringify(formSection, null, 2)}</pre>
		</div>
		<br />
	</Collapsible>
);
