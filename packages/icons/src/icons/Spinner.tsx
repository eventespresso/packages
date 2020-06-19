// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SpinnerSvg from '../svg/src/asn/Spinner';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Spinner = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SpinnerSvg} />;

Spinner.displayName = 'Spinner';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Spinner);