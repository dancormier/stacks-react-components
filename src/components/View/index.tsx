import React, { ReactElement, ReactNode } from 'react';

export type ViewProps = {
  /** HTML Tag */
  as?: keyof JSX.IntrinsicElements;
  /** Child elements */
  children?: ReactNode;
  /** Add a classname to the element */
  className?: string;
};

const View = ({
  as: Wrapper = 'div',
  children,
  className = '',
  ...rest
}: ViewProps): ReactElement => (
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
);

export default View;
