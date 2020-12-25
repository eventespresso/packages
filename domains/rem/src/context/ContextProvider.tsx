import { FormStateProvider } from './FormStateProvider';
import { StepsStateProvider } from './StepsStateProvider';

export const ContextProvider: React.FC = ({ children }) => {
	return (
		<StepsStateProvider>
			<FormStateProvider>{children}</FormStateProvider>
		</StepsStateProvider>
	);
};
