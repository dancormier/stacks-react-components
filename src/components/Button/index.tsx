import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type ButtonProps = ViewProps & {
  badge?: number;
  // /** `true` adds a loading spinner */
  hasDropdown?: boolean;
  hasIcon?: boolean;
  /** Type of badge which sets color scheme */
  modifier?: 'clear' | 'outlined' | 'filled';
  onClick: () => void;
  /** Button size */
  size?: 'xs' | 'sm' | 'md';
  /** Type of badge which sets color scheme */
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'muted'
    | 'link'
    | 'unset'
    | 'facebook'
    | 'google'
    | 'github';
};

type ButtonBadgeProps = ViewProps;

const ButtonBadge = ({ children }: ButtonBadgeProps) => (
  <View as="span" className="s-btn--badge ml4">
    <View as="span" className="s-btn--number">
      {children}
    </View>
  </View>
);

/**
 * Buttons are user interface elements which allows users to take actions throughout the project. It is important that they have ample click space and help communicate the importance of their actions.
 *
 */
const Button = ({
  as = 'button',
  children,
  className = '',
  badge,
  modifier,
  hasDropdown,
  hasIcon,
  onClick,
  size,
  variant = 'secondary',
  ...rest
}: ButtonProps): ReactElement => (
  <View
    as={as}
    className={`
      s-btn
      ${variant ? `s-btn__${variant}` : ''}
      ${modifier ? `s-btn__${modifier}` : ''}
      ${size ? `s-btn__${size}` : ''}
      ${hasDropdown ? 's-btn__dropdown' : ''}
      ${hasIcon ? 's-btn__icon' : ''}
      ${className}
    `}
    // @ts-ignore
    onClick={onClick}
    type={as === 'button' ? 'button' : ''}
    {...rest}
  >
    {children}
    {badge ? <ButtonBadge>{badge}</ButtonBadge> : ''}
  </View>
);

export default Button;
