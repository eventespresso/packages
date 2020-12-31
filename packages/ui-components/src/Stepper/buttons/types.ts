import { Button } from '../../../';

export interface StepperButtonProps extends React.ComponentProps<typeof Button> {
	skipsSteps?: boolean;
}
