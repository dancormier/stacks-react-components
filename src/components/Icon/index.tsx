import React, { ReactElement } from 'react';
import parse, { domToReact } from 'html-react-parser';
import Icons from '@stackoverflow/stacks-icons';

export type IconProps = {
  /** Name of icon (must match case) */
  name: string;
  /** Use native (colorful) icon */
  native?: boolean;
};

/**
 * Stacks provides a complete icon set, managed separately in the [Stacks-Icons](https://github.com/StackExchange/Stacks-Icons) repository. There you’ll find deeper documentation on the various uses as well as the icons’ source in our design tool Figma.
 */
const Icon = ({ name = 'LogoGlyphSm', native }: IconProps): ReactElement => {
  // @ts-ignore
  return parse(Icons[name], {
    replace: ({ attribs, children }: any): any => {
      return React.createElement(
        'svg',
        {
          ...attribs,
          className: `${attribs.class}${native ? ' native' : ''}`,
        },
        domToReact(children, {}),
      );
    },
  });
};

export default Icon;
