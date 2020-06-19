// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import AppleFilledSvg from '../svg/src/asn/AppleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AppleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AppleFilledSvg} />;

AppleFilled.displayName = 'AppleFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AppleFilled);