import { Fill } from '@eventespresso/slot-fill';
import { Upsell } from '@eventespresso/ui-components';

import { useEdtrUpsellAds, useShouldDisplayUpsellAd } from '../hooks';

export const GenericUpsell: React.FC = () => {
	const edtrUpsellAds = useEdtrUpsellAds();
	const shouldDisplayUpsellAd = useShouldDisplayUpsellAd();

	return (
		<>
			{edtrUpsellAds.map((upsellAd) => {
				const visible = shouldDisplayUpsellAd(upsellAd);
				return (
					visible && (
						<Fill key={upsellAd.id} name={upsellAd.location}>
							<Upsell {...upsellAd} />
						</Fill>
					)
				);
			})}
		</>
	);
};
