import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type AnchorsProps = ViewProps & {
  variant?:
    | 'default'
    | 'grayscale'
    | 'muted'
    | 'danger'
    | 'inherit'
    | 'underlined';
};

const Anchors = ({
  as = 'div',
  children,
  className = '',
  variant = 'default',
  ...rest
}: AnchorsProps): ReactElement => (
  <View
    as={as}
    className={`
      s-anchors
      ${variant ? `s-anchors__${variant}` : ''}
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default Anchors;
