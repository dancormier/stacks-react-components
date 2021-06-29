import React, { ReactElement } from 'react';
import View, { ViewProps } from '../View';

export type IconProps = ViewProps & {
  /** Use native (colorful) icon */
  isNative?: boolean;
};

/**
 * Stacks provides a complete icon set, managed separately in the [Stacks-Icons](https://github.com/StackExchange/Stacks-Icons) repository. There you’ll find deeper documentation on the various uses as well as the icons’ source in our design tool Figma.
 */
const Icon = ({
  as = 'span',
  children,
  isNative,
  ...rest
}: IconProps): ReactElement => {
  const [icon, setIcon] = React.useState(children);

  React.useEffect(() => {
    if (isNative) {
      // @ts-ignore
      setIcon(children.replaceAll('svg-icon ', 'svg-icon native '));
    }
  }, [children, isNative]);

  // @ts-ignore
  return <View as={as} dangerouslySetInnerHTML={{ __html: icon }} {...rest} />;
};

export default Icon;
