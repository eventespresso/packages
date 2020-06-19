// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HomeFilledSvg from '../svg/src/asn/HomeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomeFilledSvg} />;

HomeFilled.displayName = 'HomeFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomeFilled);