// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CarFilledSvg from '../svg/src/asn/CarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CarFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CarFilledSvg} />;

CarFilled.displayName = 'CarFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CarFilled);