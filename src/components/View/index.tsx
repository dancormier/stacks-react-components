import React, { ComponentType, ReactElement, ReactNode } from 'react';

export type ViewProps = {
  /** HTML Tag */
  as?: ComponentType | keyof JSX.IntrinsicElements;
  /** Child elements */
  children?: ReactNode;
  /** Appended CSS classes */
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
