import { useToolbarState, Toolbar as ReakitToolbar } from 'reakit/Toolbar';
import { mergeDeepRight } from 'ramda';

import { __ } from '@eventespresso/i18n';

import { defaultToolbar } from './defaultToolbar';
import controls from './controls';
import { ToolbarProps } from './types';
import { useMemo } from 'react';

export const Toolbar: React.FC<ToolbarProps> = ({ toolbar }) => {
	const toolbarState = useToolbarState({ loop: true });

	const toolbarConfig = useMemo<ToolbarProps['toolbar']>(
		() => mergeDeepRight(defaultToolbar, toolbar) as ToolbarProps['toolbar'],
		[toolbar]
	);

	return (
		<ReakitToolbar {...toolbarState} aria-label={__('RTE Toolbar')}>
			{toolbarConfig.options.map((option) => {
				const config = toolbarConfig?.[option];
				const Control = controls[option];
				return Control && <Control key={option} config={config as any} toolbar={toolbarState} />;
			})}
		</ReakitToolbar>
	);
};

export default Toolbar;
