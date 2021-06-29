import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type ButtonGroupProps = ViewProps;

/**
 *   Button groups are a collection of buttons. This component is used in our questions view, and is frequently used in conjunction with other form elements such as search fields and sorting dropdowns. If the content you’re interacting with is a simple paring down or filter of the current view, it’s appropriate to use this component. Add the class `.is-selected` to show the currently-selected button.
 *
 * @visibleName Button Group
 */
const ButtonGroup = ({
  className,
  ...rest
}: ButtonGroupProps): ReactElement => (
  <View className={`s-btn-group ${className}`} {...rest} />
);

export default ButtonGroup;
