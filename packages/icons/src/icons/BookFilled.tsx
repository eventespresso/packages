// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BookFilledSvg from '../svg/src/asn/BookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BookFilledSvg} />;

BookFilled.displayName = 'BookFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BookFilled);