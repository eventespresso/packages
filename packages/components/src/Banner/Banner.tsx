import React from 'react';

import { Banner as BannerAdapter, BannerProps } from '@eventespresso/adapters';

import './style.scss';

const Banner: React.FC<BannerProps> = (props) => <BannerAdapter {...props} />;

export default Banner;
