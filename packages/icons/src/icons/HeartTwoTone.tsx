// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartTwoToneSvg from '../svg/src/asn/HeartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartTwoToneSvg} />;

HeartTwoTone.displayName = 'HeartTwoTone';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartTwoTone);