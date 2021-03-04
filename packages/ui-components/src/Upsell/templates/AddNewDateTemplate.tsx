import { UpCircleFilled } from '@eventespresso/icons';

import { Link, NewEntityOption } from '../../';
import type { UpsellProps } from '../types';

export const AddNewDateTemplate: React.FC<UpsellProps> = ({
	className,
	cTA,
	cTALink,
	isOnlyButton,
	mainTitle,
	subTitle,
}) => {
	const link = <Link href={cTALink}>{cTA}</Link>;

	return (
		<div className={className}>
			{isOnlyButton ? (
				link
			) : (
				<NewEntityOption description={subTitle} icon={UpCircleFilled} title={mainTitle}>
					{link}
				</NewEntityOption>
			)}
		</div>
	);
};
