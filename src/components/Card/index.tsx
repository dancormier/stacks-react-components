import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type CardProps = ViewProps & {
  variant?: 'muted';
};

/**
 * Cards are used to group similar concepts and tasks together to make information easier to scan, read, and act on. Cards should use a heading that sets clear expectations about the card’s purpose, paragraphs that put the most critical information first, and (optionally) calls to action on the bottom to direct user action.
 */
const Card = ({
  children,
  className = '',
  variant,
  ...rest
}: CardProps): ReactElement => (
  <View
    className={`
      s-card
      ${variant ? `s-card__${variant}` : ''}
      ${className}
    `}
    {...rest}
  >
    {children}
  </View>
);

export default Card;
