import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type AvatarProps = ViewProps & {
  /** Passed through to alt on img tag */
  alt?: string;
  /** A single character for displaying an abbreviated Team name */
  letter?: string;
  /** Width/height in pixels */
  size?: 16 | 24 | 32 | 48 | 64 | 96 | 128;
  /** Image url */
  src?: string;
};

/**
 * Avatars are used to quickly identify users or teams.
 */
const Avatar = ({
  alt,
  children,
  className = '',
  letter,
  size = 16,
  src,
  ...rest
}: AvatarProps): ReactElement => (
  <View className={`s-avatar s-avatar__${size} ${className}`} {...rest}>
    {letter ? <div className="s-avatar--letter">{letter}</div> : ''}
    {src ? <img className="s-avatar--image" src={src} alt={alt} /> : ''}
    {children}
  </View>
);

export default Avatar;
