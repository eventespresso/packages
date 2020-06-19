// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import NotificationFilledSvg from '../svg/src/asn/NotificationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationFilledSvg} />;

NotificationFilled.displayName = 'NotificationFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationFilled);