// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SortSvg from '../svg/src/asn/Sort';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Sort = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SortSvg} />;

Sort.displayName = 'Sort';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Sort);