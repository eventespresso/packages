import { useContext } from 'react';
import invariant from 'invariant';

import { StepsStateContext } from './StepsStateProvider';
import { StepsState } from './types';

const useStepsState = (): StepsState => {
	const value = useContext(StepsStateContext);

	invariant(value, 'useStepsState must be used inside REM <StepsStateProvider> component');

	return value;
};

export default useStepsState;
