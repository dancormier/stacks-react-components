import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type NavigationItemProps = ViewProps & {
  className?: 'is-selected' | string;
};

/**
 * See [Navigation](#/Stacks/Navigation)
 */
const NavigationItem = ({
  as = 'a',
  children,
  className = '',
  ...rest
}: NavigationItemProps): ReactElement => (
  <View
    as={as}
    className={`
      s-navigation--item
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default NavigationItem;
