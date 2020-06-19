// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import WarningTriangleSvg from '../svg/src/asn/WarningTriangle';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WarningTriangle = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WarningTriangleSvg} />;

WarningTriangle.displayName = 'WarningTriangle';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WarningTriangle);