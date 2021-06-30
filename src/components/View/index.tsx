import React, { ReactElement, ReactNode } from 'react';

export type ViewProps = {
  /** HTML Tag */
  as?: string;
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
  // @ts-ignore
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
);

export default View;
