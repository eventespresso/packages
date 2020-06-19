// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StarFilledSvg from '../svg/src/asn/StarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarFilledSvg} />;

StarFilled.displayName = 'StarFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StarFilled);