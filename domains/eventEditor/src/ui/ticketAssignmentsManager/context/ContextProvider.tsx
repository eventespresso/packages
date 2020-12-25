import { createContext, useMemo } from 'react';

import type { ProviderProps, ContextProps } from './types';
import { DataStateProvider } from './DataStateProvider';
import { FilterStateProvider } from './FilterStateProvider';

const Context = createContext<ContextProps>(null);

const { Provider, Consumer } = Context;

const ContextProvider: React.FC<ProviderProps> = ({ children, assignmentType, entity, title, onCloseModal }) => {
	const value: ContextProps = useMemo(
		() => ({
			assignmentType,
			entity,
			title,
			onCloseModal,
		}),
		[assignmentType, entity, onCloseModal, title]
	);

	return (
		<Provider value={value}>
			<DataStateProvider assignmentType={assignmentType} entity={entity}>
				<FilterStateProvider>{children}</FilterStateProvider>
			</DataStateProvider>
		</Provider>
	);
};

export { Context, ContextProvider, Consumer };
