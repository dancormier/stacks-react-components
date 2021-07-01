import React, { ReactElement } from 'react';
import Icons from '@stackoverflow/stacks-icons';
import Button from '../Button';
import Icon from '../Icon';
import View, { ViewProps } from '../View';

export type BannerProps = ViewProps & {
  important?: boolean;
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
  variant,
  ...rest
}: BannerProps): ReactElement => (
  <View
    as={as}
    className={`s-banner
      ${variant ? `s-banner__${variant}` : ''}
      ${important ? `s-banner__important` : ''}
      ${className}
    `}
    // @ts-ignore
    role="alert"
    aria-hidden="false"
    {...rest}
  >
    <View
      className="grid grid__center jc-space-between s-banner--container"
      // @ts-ignore
      role="alertdialog"
      aria-describedby="notice-message"
    >
      <View className="grid gs8 gsx mx0" aria-label="notice-message">
        <View className="grid--cell">
          <Icon aria-hidden="true">{Icons.Lock}</Icon>
        </View>
        <View className="grid ai-center">{children}</View>
      </View>
      <View className="grid--cell ml-auto myn8" aria-label="notice-dismiss">
        <Button
          className="p8 s-btn grid grid__center fc-dark js-notice-close"
          // @ts-ignore
          role="status"
          variant="link"
          aria-hidden="true"
        >
          <Icon>{Icons.ClearSm}</Icon>
        </Button>
      </View>
    </View>
  </View>
);

export default Banner;
