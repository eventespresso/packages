import React from 'react';

import { Banner as BannerAdapter } from '@eventespresso/adapters';
import type { BannerProps } from '@eventespresso/adapters';

import './style.scss';

const Banner: React.FC<BannerProps> = (props) => <BannerAdapter {...props} />;

export default Banner;
