import React, { ReactElement, ReactNode } from 'react';

export type ViewProps = {
  /** HTML Tag */
  as?: keyof JSX.IntrinsicElements;
  /** Child elements */
  children?: ReactNode;
  /** Add a classname to the element */
  className?: string;
};

const View = ({
  as: Wrapper = 'div',
  children,
  className = '',
  ...rest
}: ViewProps): ReactElement => (
  <Wrapper className={className} {...rest}>
    {children}
  </Wrapper>
);

export default View;

// TODO: Consider a better type like so...
// export type ViewProps<
//   TElement extends keyof JSX.IntrinsicElements,
//   TComponentProps
// > = {
//   /** HTML Tag */
//   as?: TElement;
// } & JSX.IntrinsicElements[TElement] &
//   TComponentProps &
//   React.RefAttributes<any>;

// const View: React.FC = ({
//   as: tagName = 'div',
//   ...rest
// }: ViewProps<any, any>): ReactElement => {
//   const TagName = tagName as keyof JSX.IntrinsicElements;

//   return <TagName {...rest} />;
// };

// export default View
