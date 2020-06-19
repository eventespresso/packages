// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProfileOutlinedSvg from '../svg/src/asn/ProfileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProfileOutlinedSvg} />;

ProfileOutlined.displayName = 'ProfileOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProfileOutlined);