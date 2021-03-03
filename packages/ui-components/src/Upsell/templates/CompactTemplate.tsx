import { Heading, Link } from '../../';
import type { UpsellProps } from '../types';

import '../style.scss';

export const CompactTemplate: React.FC<UpsellProps> = ({ className, cTA, cTALink, mainTitle }) => {
	const prefixClassName = 'ee-upsell--template-compact';

	return (
		<div className={className}>
			<div>
				<Heading as='h3' className={`${prefixClassName}__main-title`}>
					{mainTitle}
				</Heading>
				<div className={`${prefixClassName}__cta`}>
					{cTA && (
						<Link href={cTALink} size='small'>
							{cTA}
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
