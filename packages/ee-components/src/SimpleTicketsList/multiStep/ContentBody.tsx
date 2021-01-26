import useDataListener from './useDataListener';
import type { ContentBodyProps } from './types';

/**
 * This component is inside both RFF and TAM contexts, so we can use all of their features
 */
const ContentBody: React.FC<ContentBodyProps> = ({ StepRender, steps }) => {
	// init data listener to update RFF data
	useDataListener();

	return <StepRender currentStep={steps.current} />;
};

export default ContentBody;
