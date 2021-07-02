import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type NavigationTitleProps = ViewProps & {
  className?: 'is-selected' | string;
};

/**
 * See [Navigation](#/Stacks/Navigation)
 */
const NavigationTitle = ({
  as = 'div',
  children,
  className = '',
  ...rest
}: NavigationTitleProps): ReactElement => (
  <View
    as={as}
    className={`
      s-navigation--title
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default NavigationTitle;
