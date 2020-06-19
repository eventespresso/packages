// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BugOutlinedSvg from '../svg/src/asn/BugOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BugOutlinedSvg} />;

BugOutlined.displayName = 'BugOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BugOutlined);