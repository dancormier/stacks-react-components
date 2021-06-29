import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type BlockLinkProps = ViewProps & {
  className?: 'is-selected' | string;
  border?: 'left' | 'right';
};

const BlockLink = ({
  as = 'a',
  children,
  className = '',
  border,
  ...rest
}: BlockLinkProps): ReactElement => (
  <View
    as={as}
    className={`
      s-block-link
      ${border ? `s-block-link__${border}` : ''}
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default BlockLink;
