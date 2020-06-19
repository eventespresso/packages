// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BellOutlinedSvg from '../svg/src/asn/BellOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BellOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BellOutlinedSvg} />;

BellOutlined.displayName = 'BellOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BellOutlined);