import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type ButtonGroupContainerProps = ViewProps;

/**
 * When required to wrap one of our buttons within a button group in a form, apply this class to the form to maintain the intended visuals.
 *
 * See [Button Group](/#/Stacks/Button Group).
 *
 * @visibleName Button Group Container
 */
const ButtonGroupContainer = ({
  className = '',
  ...rest
}: ButtonGroupContainerProps): ReactElement => (
  <View className={`s-btn-group--container ${className}`} {...rest} />
);

export default ButtonGroupContainer;
