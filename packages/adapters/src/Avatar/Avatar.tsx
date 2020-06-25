import React from 'react';
import { Avatar as ChakraAvatar, AvatarBadge } from '@chakra-ui/core';

import type { AvatarProps } from './types';

const Avatar: React.FC<AvatarProps> = ({ badgeProps, userName, ...avatarProps }) => {
  if (badgeProps) {
    return (
      <ChakraAvatar {...avatarProps}>
        <AvatarBadge {...badgeProps} />
      </ChakraAvatar>
    );
  }

  if (userName) {
    const size = avatarProps.size || 'lg';
    return <ChakraAvatar {...avatarProps} name={userName} size={size} />;
  }

  return <ChakraAvatar {...avatarProps} />;
};

export default Avatar;
