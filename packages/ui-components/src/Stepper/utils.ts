import { isRTL as getRTL } from '@eventespresso/i18n';
import { ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight } from '@eventespresso/icons';

export const getStepperIconComponent = ({ skipsSteps = false, isNext = true }): typeof ChevronLeft => {
	const isRTL = getRTL();

	switch (true) {
		case isRTL && skipsSteps:
			return isNext ? ChevronDoubleLeft : ChevronDoubleRight;

		case isRTL && !skipsSteps:
			return isNext ? ChevronLeft : ChevronRight;

		case !isRTL && skipsSteps:
			return isNext ? ChevronDoubleRight : ChevronDoubleLeft;

		default:
			return isNext ? ChevronRight : ChevronLeft;
	}
};
