// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WarningSvg from '../svg/src/asn/Warning';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Warning = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WarningSvg} />;

Warning.displayName = 'Warning';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Warning);