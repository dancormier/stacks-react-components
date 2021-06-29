import React, { ReactElement } from 'react';
// @ts-ignore
import Icons from '@stackoverflow/stacks-icons';
import Icon from '../Icon';
import View, { ViewProps } from '../View';

export type BreadcrumbProps = ViewProps & {
  showDivider?: boolean;
};

/**
 * `Breadcrumbs` are used to provide context for the currently-viewed page.
 *
 * See [Breadcrumbs](/#/Stacks/Breadcrumbs).
 */
const Breadcrumb = ({
  className = '',
  children,
  showDivider = true,
  ...rest
}: BreadcrumbProps): ReactElement => (
  <View className={`s-breadcrumbs--item ${className}`} {...rest}>
    {children}
    {showDivider && (
      <Icon className="s-breadcrumbs--divider">{Icons.ArrowRightAltSm}</Icon>
    )}
  </View>
);

export default Breadcrumb;
