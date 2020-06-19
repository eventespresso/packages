// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SkinOutlinedSvg from '../svg/src/asn/SkinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SkinOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SkinOutlinedSvg} />;

SkinOutlined.displayName = 'SkinOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SkinOutlined);