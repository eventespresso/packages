import { useToolbarState, Toolbar as ReakitToolbar } from 'reakit/Toolbar';

import { __ } from '@eventespresso/i18n';

import { defaultToolbar } from '../defaultToolbar';
// import Link from './Link';
import controls from './controls';
import { ToolbarProps } from '../types';

export const Toolbar: React.FC<ToolbarProps> = ({ toolbar = defaultToolbar }) => {
	const toolbarState = useToolbarState({ loop: true });

	return (
		<ReakitToolbar {...toolbarState} aria-label={__('RTE Toolbar')}>
			{toolbar.options.map((option) => {
				const config = defaultToolbar?.[option];
				const Control = controls[option];
				return Control && <Control key={option} config={config as any} toolbar={toolbarState} />;
			})}
		</ReakitToolbar>
	);
};

export default Toolbar;
