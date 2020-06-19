// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import CheckSvg from '../svg/src/asn/Check';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Check = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CheckSvg} />;

Check.displayName = 'Check';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Check);