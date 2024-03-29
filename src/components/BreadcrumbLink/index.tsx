import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type BreadcrumbLinkProps = ViewProps & {
  href?: string;
};

/**
 * `BreadcrumbLinks` are link components for use withing `Breadcrumb`.
 *
 * See [Breadcrumbs](/#/Stacks/Breadcrumbs).
 */
const BreadcrumbLink = ({
  as = 'a',
  className = '',
  children,
  href = '#',
  ...rest
}: BreadcrumbLinkProps): ReactElement => (
  <View
    as={as}
    className={`s-breadcrumbs--link ${className}`}
    // @ts-ignore
    href={(as === 'a' && href) || ''}
    {...rest}
  >
    {children}
  </View>
);

export default BreadcrumbLink;
