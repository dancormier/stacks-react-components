import React, { ReactElement } from 'react';
import Icons from '@stackoverflow/stacks-icons';
import Icon from '../Icon';
import View, { ViewProps } from '../View';

export type TagProps = ViewProps & {
  className?: 'is-selected' | string;
  // TODO: Think of better name
  hasDismiss?: boolean;
  sponsor?: {
    src: string;
    alt: string;
    height?: string;
    width?: string;
  };
  modifier?: 'dismiss' | 'sponsor';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'moderator' | 'required' | 'muted';
};

/**
 * Tags are an interactive, community-generated keyword that allow communities to label, organize, and discover related content. Tags are maintained by their respective communities
 */
const Tag = ({
  as = 'a',
  children,
  className = '',
  modifier,
  hasDismiss,
  sponsor,
  size,
  variant,
  ...rest
}: TagProps): ReactElement => (
  <View
    as={as}
    className={`
      s-tag
      ${variant ? `s-tag__${variant}` : ''}
      ${modifier ? `s-tag__${modifier}` : ''}
      ${size ? `s-tag__${size}` : ''}
      ${className}
    `}
    {...rest}
  >
    {sponsor ? (
      <View
        as="img"
        className="s-tag--sponsor"
        // @ts-ignore
        src={sponsor.src}
        alt={sponsor.alt}
        height={sponsor.height}
        width={sponsor.width}
      />
    ) : null}
    {children}
    {hasDismiss ? (
      <Icon as="span" className="s-tag--dismiss">
        {Icons.ClearSm}
      </Icon>
    ) : null}
  </View>
);

export default Tag;
