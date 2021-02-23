import { CSSProperties, useCallback, useEffect, useState } from 'react';

import { addAction, removeAction } from '@eventespresso/ioc';

import { ContextProvider } from './PluginContext';
import { getPlugins } from '../api';

const NAMESPACE = 'PluginArea';

const style: CSSProperties = { display: 'none' };

export const PluginArea: React.FC = () => {
	const getCurrentPluginsState = useCallback(() => {
		return getPlugins().map(({ name, render }) => {
			return {
				render,
				context: {
					name,
				},
			};
		});
	}, []);

	const [plugins, setPlugins] = useState(getCurrentPluginsState());

	const setThePlugins = useCallback(() => {
		setPlugins(getCurrentPluginsState());
	}, [getCurrentPluginsState]);

	useEffect(() => {
		addAction('plugins.pluginUpdated', NAMESPACE, setThePlugins);
		addAction('plugins.pluginRegistered', NAMESPACE, setThePlugins);
		addAction('plugins.pluginUnregistered', NAMESPACE, setThePlugins);

		return () => {
			removeAction('plugins.pluginUpdated', NAMESPACE);
			removeAction('plugins.pluginRegistered', NAMESPACE);
			removeAction('plugins.pluginUnregistered', NAMESPACE);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div style={style}>
			{plugins.map(({ context, render }) => (
				<ContextProvider key={context.name} value={context}>
					{render()}
				</ContextProvider>
			))}
		</div>
	);
};
