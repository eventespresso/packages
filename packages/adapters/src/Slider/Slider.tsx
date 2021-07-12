import {
	Slider as ChakraSlider,
	SliderProps as ChakraSliderProps,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from '@chakra-ui/react';

import { CurrentValue } from './CurrentValue';

export interface SliderProps extends ChakraSliderProps {}

export const Slider: React.FC<SliderProps> = (props) => {
	return (
		<ChakraSlider {...props}>
			<SliderTrack>
				<SliderFilledTrack />
			</SliderTrack>
			<SliderThumb boxSize={8}>
				<CurrentValue />
			</SliderThumb>
		</ChakraSlider>
	);
};
