import { EdtrStateProvider } from '../EdtrStateContext';
import { withEdtrContext } from '@eventespresso/edtr-services';

export const ContextProviders = withEdtrContext(EdtrStateProvider);
