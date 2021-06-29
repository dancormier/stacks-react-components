import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type SpinnerProps = ViewProps & {
  /** Screen reader label */
  label?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
};

/**
 * A loading spinner is used for indicating a loading state of a page or section. It is colored according to the currently applying font color.
 */
const Spinner = ({
  className = '',
  label = 'Loading…',
  size,
  ...rest
}: SpinnerProps): ReactElement => (
  <View
    className={`
      s-spinner
      ${size ? `s-spinner__${size}` : ''}
      ${className}
    `}
    {...rest}
  >
    <View className="v-visible-sr">{label}</View>
  </View>
);

export default Spinner;
