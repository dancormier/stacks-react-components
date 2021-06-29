import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type BreadcrumbsProps = ViewProps;

/**
 * `Breadcrumbs` are used to provide context for the currently-viewed page.
 *
 * See also [Breadcrumb](/#/Stacks/Breadcrumb) and [BreadcrumbLink](/#/Stacks/BreadcrumbLink).
 */
const Breadcrumbs = ({
  as = 'nav',
  className = '',
  children,
  ...rest
}: BreadcrumbsProps): ReactElement => (
  <View
    as={as}
    className={`s-breadcrumbs ${className}`}
    aria-label="breadcrumb"
    {...rest}
  >
    {children}
  </View>
);

export default Breadcrumbs;
