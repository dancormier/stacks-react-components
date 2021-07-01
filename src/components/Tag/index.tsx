import React, { ReactElement } from 'react';
import Icons from '@stackoverflow/stacks-icons';
import Icon from '../Icon';
import View, { ViewProps } from '../View';

export type TagProps = ViewProps & {
  className?: 'is-selected' | string;
  dismissable?: boolean;
  sponsor?: {
    src: string;
    alt: string;
    height?: string;
    width?: string;
  };
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'moderator' | 'required' | 'muted';
};

/**
 * Tags are an interactive, community-generated keyword that allow communities to label, organize, and discover related content. Tags are maintained by their respective communities
 */
const Tag: React.FC = ({
  as = 'a',
  children,
  className = '',
  dismissable,
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
      ${size ? `s-tag__${size}` : ''}
      ${className}
    `}
    {...rest}
  >
    {sponsor ? (
      <img
        className="s-tag--sponsor"
        src={sponsor.src}
        alt={sponsor.alt}
        height={sponsor.height}
        width={sponsor.width}
      />
    ) : null}
    {children}
    {dismissable ? (
      <Icon className="s-tag--dismiss">{Icons.ClearSm}</Icon>
    ) : null}
  </View>
);

export default Tag;
