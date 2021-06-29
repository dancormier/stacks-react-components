import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type BadgeProps = ViewProps & {
  /** Bling color */
  bling?: 'gold' | 'silver' | 'bronze';
  /** Badge size */
  size?: 'xs' | 'sm';
  /** Type of badge which sets color scheme */
  variant?:
    | 'gold'
    | 'silver'
    | 'bronze'
    | 'bounty'
    | 'votes'
    | 'answered'
    | 'important'
    | 'rep'
    | 'rep-down'
    | 'admin'
    | 'moderator'
    | 'staff';
};

/**
 * Badges are labels used for flags, earned achievements, and number totals.
 */
const Badge = ({
  as = 'span',
  children,
  className = '',
  bling,
  size,
  variant,
  ...rest
}: BadgeProps): ReactElement => (
  <View
    as={as}
    className={`
      s-badge
      ${variant ? `s-badge__${variant}` : ''}
      ${size ? `s-badge__${size}` : ''}
      ${className}
    `}
    {...rest}
  >
    <span className={bling ? `s-award-bling s-award-bling__${bling}` : ''}>
      {children}
    </span>
  </View>
);

export default Badge;
