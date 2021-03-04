import { Upsell } from '@eventespresso/ui-components';
import { EdtrSlots } from '@eventespresso/services';
import { NewDateOption } from '@eventespresso/edtr-services';

import { useUpsellAd4Slot, useShouldDisplayUpsellAd } from '../hooks';

export type NewDateUpsellProps = {
	slot: EdtrSlots;
	output?: JSX.Element;
};

export const AddNewDateUpsell: React.FC<NewDateUpsellProps> = ({ output, slot }) => {
	const upsellAd4Slot = useUpsellAd4Slot()(slot);
	const shouldDisplayUpsellAd = useShouldDisplayUpsellAd();

	if (!upsellAd4Slot || !shouldDisplayUpsellAd(upsellAd4Slot)) {
		return output;
	}

	// extract upsell data
	const { mainTitle, subTitle, cTA, cTALink } = upsellAd4Slot;

	return (
		<NewDateOption>
			{({ count }) => {
				const isOnlyButton = count === 1;

				return (
					<Upsell
						cTA={cTA}
						cTALink={cTALink}
						isOnlyButton={isOnlyButton}
						mainTitle={mainTitle}
						subTitle={subTitle}
						templateId='addNewDate'
					/>
				);
			}}
		</NewDateOption>
	);
};
