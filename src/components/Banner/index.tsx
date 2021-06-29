import React, { ReactElement } from 'react';
// @ts-ignore
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
    role="alert"
    aria-hidden="false"
    {...rest}
  >
    <div
      className="grid grid__center jc-space-between s-banner--container"
      role="alertdialog"
      aria-describedby="notice-message"
    >
      <div className="grid gs8 gsx mx0" aria-label="notice-message">
        <div className="grid--cell">
          <svg
            aria-hidden="true"
            className="svg-icon iconLock"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M16 9a2 2 0 00-2-2V6A5 5 0 004 6v1a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V9zm-7 5a2 2 0 110-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 016.2 0v1z" />
          </svg>
        </div>
        <div className="grid ai-center">{children}</div>
      </div>
      <div className="grid--cell ml-auto myn8" aria-label="notice-dismiss">
        <Button
          className="p8 s-btn grid grid__center fc-dark js-notice-close"
          // @ts-ignore
          role="status"
          variant="link"
          aria-hidden="true"
        >
          <Icon>{Icons.ClearSm}</Icon>
        </Button>
      </div>
    </div>
  </View>
);

export default Banner;
