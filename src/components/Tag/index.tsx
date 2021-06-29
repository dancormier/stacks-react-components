import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type TagProps = ViewProps & {
  className?: 'is-selected' | string;
  modifier?: 'dismiss' | 'sponsor';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'moderator' | 'required' | 'muted';
};

/**
 * Tags are an interactive, community-generated keyword that allow communities to label, organize, and discover related content. Tags are maintained by their respective communities
 */
const Tag = ({
  as = 'a',
  children,
  className = '',
  modifier,
  size,
  variant,
  ...rest
}: TagProps): ReactElement => (
  <View
    as={as}
    className={`
      s-tag
      ${variant ? `s-tag__${variant}` : ''}
      ${modifier ? `s-tag__${modifier}` : ''}
      ${size ? `s-tag__${size}` : ''}
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default Tag;
