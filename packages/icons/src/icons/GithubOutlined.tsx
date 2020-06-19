// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GithubOutlinedSvg from '../svg/src/asn/GithubOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GithubOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GithubOutlinedSvg} />;

GithubOutlined.displayName = 'GithubOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GithubOutlined);