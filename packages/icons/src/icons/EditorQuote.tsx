import withClassName from '../withClassName';
import { IconProps } from '../types';

const EditorQuote = (props: IconProps): JSX.Element => {
	return (
		<svg
			aria-hidden='true'
			fill='currentColor'
			height='1.5em'
			width='1.5em'
			viewBox='0 0 20 20'
			className='ee-svg--editor-quote'
			{...props}
		>
			<path d='M9.49 13.22c0-.74-.2-1.38-.61-1.9-.62-.78-1.83-.88-2.53-.72-.29-1.65 1.11-3.75 2.92-4.65L7.88 4c-2.73 1.3-5.42 4.28-4.96 8.05C3.21 14.43 4.59 16 6.54 16c.85 0 1.56-.25 2.12-.75s.83-1.18.83-2.03zm8.05 0c0-.74-.2-1.38-.61-1.9-.63-.78-1.83-.88-2.53-.72-.29-1.65 1.11-3.75 2.92-4.65L15.93 4c-2.73 1.3-5.41 4.28-4.95 8.05.29 2.38 1.66 3.95 3.61 3.95.85 0 1.56-.25 2.12-.75s.83-1.18.83-2.03z' />
		</svg>
	);
};

export default withClassName(EditorQuote, 'editor-quote');
