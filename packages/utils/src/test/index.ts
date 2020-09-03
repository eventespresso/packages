import { act } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';

/**
 * Wait for initial setup of cache etc.
 * Apollo returns promises for query hooks which create warnings when testing in sync
 * We need to wait for those promises to resolve in order to avoid state updates synchronously.
 *
 * @see https://github.com/apollographql/apollo-client/issues/5920
 */
export const actWait = async (): Promise<any> => await act(() => waitFor(() => null));
