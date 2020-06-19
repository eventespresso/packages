// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TrashSvg from '../svg/src/asn/Trash';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const Trash = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TrashSvg} />;

Trash.displayName = 'Trash';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(Trash);