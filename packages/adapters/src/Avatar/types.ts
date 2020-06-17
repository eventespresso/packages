import { BoxProps, IAvatar } from '@chakra-ui/core';

export interface AvatarProps extends IAvatar {
  badgeProps?: BoxProps;
  userName?: string;
}
