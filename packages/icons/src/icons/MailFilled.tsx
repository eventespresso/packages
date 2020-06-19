// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MailFilledSvg from '../svg/src/asn/MailFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MailFilledSvg} />;

MailFilled.displayName = 'MailFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MailFilled);