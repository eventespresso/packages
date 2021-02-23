import { Button, NewEntityOption } from '@eventespresso/ui-components';
import { NewDateOption } from '@eventespresso/edtr-services';
import { __ } from '@eventespresso/i18n';
import { UpCircleFilled } from '@eventespresso/icons';

import { useCanUseAdvancedEditor } from '../hooks';

export type NewDateUpsellProps = {
	output?: React.ReactNode;
};

export const NewDateUpsell: React.FC<NewDateUpsellProps> = ({ output }) => {
	const canUseEdtr = useCanUseAdvancedEditor();

	return canUseEdtr ? (
		<>{output}</>
	) : (
		<NewDateOption>
			{({ count }) => {
				const isOnlyButton = count === 1;

				if (isOnlyButton) {
					return <Button buttonType='primary'>{__('Upgrade to add single date!')}</Button>;
				}
				return (
					<NewEntityOption
						description={__('You need a subscription to acces this feature.')}
						icon={UpCircleFilled}
						title={__('Single Date')}
					>
						<Button buttonType='primary'>{__('UPGRADE NOW!')}</Button>
					</NewEntityOption>
				);
			}}
		</NewDateOption>
	);
};
