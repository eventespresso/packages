import { useContext } from 'react';

import { ConfigContext } from '../context/ConfigProvider';
import type { ConfigDataProps } from './types';

export const useConfig = (): ConfigDataProps => useContext<ConfigDataProps>(ConfigContext);
