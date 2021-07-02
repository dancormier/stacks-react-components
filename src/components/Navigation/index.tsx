import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type NavigationProps = ViewProps & {
  scrollable?: boolean;
  size?: 'default' | 'sm';
  variant?: 'muted';
  layout?: 'horizontal' | 'vertical';
};

/**
 * Our navigation component is a collection of pill-shaped buttons that respond gracefully to various window sizes and parent containers.
 */
const Navigation = ({
  as = 'ul',
  children,
  className = '',
  layout = 'horizontal',
  scrollable = false,
  size = 'default',
  variant,
  ...rest
}: NavigationProps): ReactElement => (
  <View
    as={as}
    className={`
      s-navigation
      ${variant ? `s-navigation__${variant}` : ''}
      ${layout !== 'horizontal' ? `s-navigation__${layout}` : ''}
      ${scrollable ? `s-navigation__${scrollable}` : ''}
      ${size !== 'default' ? `s-size__${size}` : ''}
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default Navigation;
