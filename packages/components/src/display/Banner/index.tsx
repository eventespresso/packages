import React from 'react';

import { Banner as BannerAdapter, BannerProps } from '@eventespresso/infrastructure';

import './style.scss';

const Banner: React.FC<BannerProps> = props => <BannerAdapter {...props} />;

export default Banner;
