// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BulbOutlinedSvg from '../svg/src/asn/BulbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BulbOutlinedSvg} />;

BulbOutlined.displayName = 'BulbOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BulbOutlined);