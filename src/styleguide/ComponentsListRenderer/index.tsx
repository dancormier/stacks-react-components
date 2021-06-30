// @ts-nocheck
import React from 'react';
import { NavigationItem } from 'src/components/index';

type Item = {
  heading?: string;
  name: string;
  slug?: string;
  content?: any;
  selected: boolean;
};

const renderItems = items => {
  return (
    <>
      {items.map(({ heading, name, slug, content, selected }: Item) => (
        <NavigationItem
          href={`#/Stacks/${name}`}
          key={name}
          className={selected ? 'is-selected' : ''}
        >
          {name} {heading}
        </NavigationItem>
      ))}
    </>
  );
};

const ComponentsListRenderer = ({
  children,
  items,
}: {
  children: any;
  items: Item[];
}): React.ReactElement => (
  <>
    {renderItems(items)}
    {children}
  </>
);

export default ComponentsListRenderer;
