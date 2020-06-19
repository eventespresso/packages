// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ChevronLeftSvg from '../svg/src/asn/ChevronLeft';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChevronLeft = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ChevronLeftSvg} />;

ChevronLeft.displayName = 'ChevronLeft';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ChevronLeft);