import { Collapsible } from '../Collapsible';

import type { SettingsProps } from './types';

export const FormElementSettings: React.FC<SettingsProps> = ({ element, open = false }) => (
	<Collapsible show={open}>
		<div className='ee-form-element__tabs'>
			<p>tabs go here</p>
			<pre>{JSON.stringify(element, null, 2)}</pre>
		</div>
		<br />
	</Collapsible>
);
