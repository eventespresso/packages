// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ProfileFilledSvg from '../svg/src/asn/ProfileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProfileFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProfileFilledSvg} />;

ProfileFilled.displayName = 'ProfileFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProfileFilled);