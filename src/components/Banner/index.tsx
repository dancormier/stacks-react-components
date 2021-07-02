import React, { ReactElement } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import View, { ViewProps } from '../View';

export type BannerProps = ViewProps & {
  important?: boolean;
  pinned?: boolean;
  variant?: 'info' | 'success' | 'warning' | 'danger';
};

/**
 * Banner description
 */
const Banner = ({
  as = 'aside',
  className = '',
  children,
  important,
  pinned,
  variant,
  ...rest
}: BannerProps): ReactElement => (
  <View
    as={as}
    className={`s-banner
      ${variant ? `s-banner__${variant}` : ''}
      ${important ? `s-banner__important` : ''}
      ${pinned ? `is-pinned` : ''}
      ${className}
    `}
    // @ts-ignore
    role="alert"
    aria-hidden="false"
    {...rest}
  >
    <View
      className="d-flex jc-space-between s-banner--container"
      // @ts-ignore
      role="alertdialog"
      aria-describedby="notice-message"
    >
      <View className="flex--item">{children}</View>
      <View className="flex-item" aria-label="notice-dismiss">
        <Button
          as="a"
          className={`p8 ${important ? `fc-white` : 'fc-dark'}`}
          // @ts-ignore
          role="status"
          variant="link"
          aria-hidden="true"
        >
          <Icon name="ClearSm" />
        </Button>
      </View>
    </View>
  </View>
);

export default Banner;
