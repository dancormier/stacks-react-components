import React from 'react';
import View, { ViewProps } from '../View';

export type ButtonProps = ViewProps & {
  badge?: number;
  disabled?: boolean;
  // /** `true` adds a loading spinner */
  dropdown?: boolean;
  hasIcon?: boolean;
  /** Provides a url for buttons being used as a link */
  href?: string;
  loading?: boolean;
  /** Type of badge which sets color scheme */
  modifier?: 'clear' | 'outlined' | 'filled';
  /** Handler to be called on blur */
  onBlur?: React.FocusEventHandler<HTMLElement>;
  /** Handler to be called on click. */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** Handler to be called on focus */
  onFocus?: React.FocusEventHandler<HTMLElement>;
  size?: 'xs' | 'sm' | 'md';
  /** Pass type down to a button */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /** The base styling to apply to the button */
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
const Button: React.FC<ButtonProps> = ({
  as = 'button',
  children,
  className = '',
  badge,
  modifier,
  dropdown,
  hasIcon,
  loading,
  size,
  variant = 'secondary',
  ...rest
}: ButtonProps) => (
  <View
    as={as}
    className={`
      s-btn
      ${variant ? `s-btn__${variant}` : ''}
      ${modifier ? `s-btn__${modifier}` : ''}
      ${size ? `s-btn__${size}` : ''}
      ${dropdown ? 's-btn__dropdown' : ''}
      ${hasIcon ? 's-btn__icon' : ''}
      ${loading ? 'is-loading' : ''}
      ${className}
    `}
    {...rest}
  >
    {children}
    {badge ? <ButtonBadge>{badge}</ButtonBadge> : ''}
  </View>
);

export default Button;
