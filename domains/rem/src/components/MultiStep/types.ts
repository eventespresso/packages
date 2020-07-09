import type { Disclosure } from '@eventespresso/services';
import type { Datetime } from '@eventespresso/edtr-services';
// import type { PrevNext } from '@eventespresso/hooks';

export interface ContainerProps extends Omit<Disclosure, 'onOpen'> {}

export interface ContentProps {
	entity: Datetime;
	onClose: VoidFunction;
}

// export interface ContentBodyProps extends Pick<PrevNext, 'current'> {
// 	datetime: Datetime;
// }

// export interface ContentFooterProps extends Pick<PrevNext, 'current' | 'next' | 'prev'> {}

export interface ContentBodyProps {}

export interface ContentFooterProps {}

export interface EditDatetimeProps {
	datetime: Datetime;
	onClose?: VoidFunction;
}
