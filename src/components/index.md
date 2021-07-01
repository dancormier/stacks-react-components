Use these components in your React app, cowboy! Yee-haw!

## Goals

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Installing

With the magic of NPM, you can eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```shell
$ npm install -D @stackoverflow/stacks-react-components
```

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

## Usage

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

1. **Import your desired component**

With the magic of ES Modules, you can quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.

## Demo time!

```jsx padded
import React from 'react';
import {
  Button,
  Card,
  Icon,
  Navigation,
  NavigationItem,
  NavigationTitle,
  Spinner,
  Tag,
  View,
} from './index';

const navItems = ['Home', 'Email', 'Content', 'Brand', 'Marketing'];
const tags = [
  {
    href: '#',
    children: 'React',
  },
  {
    href: '#',
    variant: 'moderator',
    children: 'status-in-progress',
  },
  {
    href: '#',
    variant: 'required',
    hasDismiss: true,
    children: 'feature-request',
  },
  {
    href: '#',
    variant: 'muted',
    children: 'razor',
    className: 'is-selected',
  },
];

const CustomNav = ({ items, selectedIndex }) => {
  const [selected, setSelected] = React.useState(selectedIndex);

  return items.map((item, i) => (
    <li>
      <NavigationItem
        key={item}
        as="button"
        className={item === items[selected] ? 'is-selected' : ''}
        onClick={() => setSelected(i)}
      >
        {item}
      </NavigationItem>
    </li>
  ));
};

<View className="mn6 mtn16 mb0">
  <Navigation className="bg-black-050 bb b1 bc-black-100 py8 px16">
    <CustomNav items={navItems} selectedIndex={0} />
  </Navigation>
  <View className="p12">
    <Card className="bs-sm">
      <h2 className="fs-body3 lh-sm fc-dark">Base card title</h2>
      <p className="fs-body1 fc-medium">
        This is a description of the card’s content.
      </p>
      <View className="mb16">
        {tags.map(tag => (
          <Tag key={tag.children} className="mr8" {...tag} />
        ))}
      </View>
      <View as="p" className="grid gsx gs4">
        <Button variant="primary" size="sm" className="grid--cell">
          Call to action
        </Button>
        <Button size="sm" className="grid--cell">
          Cancel
        </Button>
      </View>
    </Card>
  </View>
  <View className="p16">
    <Spinner size="lg" />
  </View>
</View>;
```
