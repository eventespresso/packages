// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LikeFilledSvg from '../svg/src/asn/LikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LikeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LikeFilledSvg} />;

LikeFilled.displayName = 'LikeFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LikeFilled);