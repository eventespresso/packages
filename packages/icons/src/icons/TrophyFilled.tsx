// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrophyFilledSvg from '../svg/src/asn/TrophyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TrophyFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrophyFilledSvg} />;

TrophyFilled.displayName = 'TrophyFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TrophyFilled);