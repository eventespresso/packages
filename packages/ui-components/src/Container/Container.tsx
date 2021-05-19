import { isRTL as getRTL } from '@eventespresso/i18n';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Row from './Row';
import Sidebar from './Sidebar';
import Stack from './Stack';
import type { ContainerProps } from './types';

import './styles.scss';

const Container: React.FC<ContainerProps> = ({
	classes,
	content,
	footer,
	header,
	sidebarAfter,
	sidebarBefore,
	...props
}) => {
	const isRTL = getRTL();
	const sidebarOne = sidebarBefore && (
		<Sidebar before className={classes?.sidebarBefore}>
			{sidebarBefore}
		</Sidebar>
	);
	const sidebarTwo = sidebarAfter && <Sidebar className={classes?.sidebarAfter}>{sidebarAfter}</Sidebar>;
	const afterContent = isRTL ? sidebarOne : sidebarTwo;
	const beforeContent = isRTL ? sidebarTwo : sidebarOne;
	return (
		<Stack {...props} className={classes?.container}>
			{header && <Header className={classes?.header}>{header}</Header>}
			<Row className={classes?.body}>
				{beforeContent}
				<Content className={classes?.content}>{content}</Content>
				{afterContent}
			</Row>
			{footer && <Footer className={classes?.footer}>{footer}</Footer>}
		</Stack>
	);
};

export default Container;
