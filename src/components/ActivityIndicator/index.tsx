import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type ActivityIndicatorProps = ViewProps & {
  /** Screen reader label */
  label?: string;
};

/**
 * Stacks provides a small jewel for indicating new activity.
 *
 * @visibleName Activity Indicator
 */
const ActivityIndicator = ({
  className = '',
  label = 'New activity', // TODO: Create convention for screen reader text
  ...rest
}: ActivityIndicatorProps): ReactElement => (
  <View className={`s-activity-indicator ${className}`} {...rest}>
    {label ? <div className="v-visible-sr">{label}</div> : null}
  </View>
);

export default ActivityIndicator;
