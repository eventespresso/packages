// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChevronRightSvg from '../svg/src/asn/ChevronRight';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChevronRight = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChevronRightSvg} />;

ChevronRight.displayName = 'ChevronRight';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChevronRight);