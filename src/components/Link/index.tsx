import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type LinkProps = ViewProps & {
  modifier?: 'visited';
  variant?: 'grayscale' | 'muted' | 'danger' | 'inherit' | 'underlined';
};

/**
 * Links are lightly styled via the a element by default. In addition, we provide .s-link and its variations. In rare situations, .s-link can be applied to n button while maintaining the look of an anchor.
 */
const Link = ({
  as = 'a',
  children,
  className = '',
  modifier,
  variant,
  ...rest
}: LinkProps): ReactElement => (
  <View
    as={as}
    className={`
      s-link
      ${variant ? `s-link__${variant}` : ''}
      ${modifier ? `s-link__${modifier}` : ''}
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default Link;
