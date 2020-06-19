// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarOutlinedSvg from '../svg/src/asn/CarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarOutlinedSvg} />;

CarOutlined.displayName = 'CarOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarOutlined);