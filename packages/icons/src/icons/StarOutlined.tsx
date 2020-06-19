// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StarOutlinedSvg from '../svg/src/asn/StarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarOutlinedSvg} />;

StarOutlined.displayName = 'StarOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StarOutlined);