// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GoldFilledSvg from '../svg/src/asn/GoldFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GoldFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GoldFilledSvg} />;

GoldFilled.displayName = 'GoldFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GoldFilled);