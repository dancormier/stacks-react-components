import React, { ReactElement } from 'react';
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
      <View as="span" className="s-tag--dismiss">
        <Icon name="ClearSm" />
      </View>
    ) : (
      ''
    )}
  </View>
);

export default Tag;
