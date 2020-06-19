// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import TagsOutlinedSvg from '../svg/src/asn/TagsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TagsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TagsOutlinedSvg} />;

TagsOutlined.displayName = 'TagsOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TagsOutlined);