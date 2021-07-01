## Base

The base card styling applies a border and padding to the card.

Cards can be any size and it’s ok to increase the body text size for larger cards.

```jsx padded
import { Button, View } from '../index';

<>
  <Card className="wmx3 mb12">
    <h2 className="fs-body3 lh-sm fc-dark">Base card title</h2>
    <p className="fs-body1 fc-medium">
      This is a description of the card’s content.
    </p>
    <View as="p" className="grid gsx gs4">
      <Button variant="primary" size="sm" className="grid--cell">
        Call to action
      </Button>
      <Button size="sm" className="grid--cell">
        Cancel
      </Button>
    </View>
  </Card>
  <Card>
    <h2 className="fs-body3 lh-sm fc-dark">Base card title</h2>
    <p className="fs-body2 fc-medium">
      This is a description of the card’s content. Sometimes the description is
      two or three sentences.
    </p>
    <View as="p" className="grid gsx gs4">
      <Button variant="primary" size="sm" className="grid--cell">
        Call to action
      </Button>
      <Button size="sm" className="grid--cell">
        Cancel
      </Button>
    </View>
  </Card>
</>;
```

## Box shadows

```jsx padded
import { View } from '../index';

<View className="grid grid__allcells4 md:fd-column gs12">
  <Card className="grid--cell bs-sm">
    <h2 className="fs-body3 lh-sm fc-dark">Base card title</h2>
    <p className="fs-body1 fc-medium">This adds a small box shadow.</p>
  </Card>
  <Card className="grid--cell bs-md">
    <h2 className="fs-body3 lh-sm fc-dark">Base card title</h2>
    <p className="fs-body1 fc-medium">This adds a medium box shadow.</p>
  </Card>
  <Card className="grid--cell bs-lg">
    <h2 className="fs-body3 lh-sm fc-dark">Base card title</h2>
    <p className="fs-body1 fc-medium">This adds a large box shadow.</p>
  </Card>
</View>;
```

## Linked cards

```jsx padded
import { Button, View } from '../index';

<View className="grid grid__allcells4 fw-wrap ai-stretch md:fd-column gs12">
  <Card as="a" href="#" className="grid--cell">
    <h2 className="fs-body3 lh-sm fc-dark">Linked card title</h2>
    <p className="fs-body1 fc-medium mb8">
      This is a description of the card's content.
    </p>
    <Button variant="link">Learn more</Button>
  </Card>
  <Card as="a" href="#" className="grid--cell">
    <h2 className="fs-body3 lh-sm fc-dark">Linked card title</h2>
    <p className="fs-body1 fc-medium">
      <>
        When vertical space is an issue, the CTA can be moved inline with
        paragraph text.
      </>
      <Button variant="link">Learn more</Button>
    </p>
  </Card>
  <Card as="a" href="#" className="grid--cell">
    <h2 className="fs-body3 lh-sm fc-dark">Linked card title</h2>
    <p className="fs-body1 fc-medium">
      When a card’s content is visually complex (ex. a graph) or having extra
      decoration is visually distracting.
    </p>
  </Card>
  <Card as="a" href="#" className="grid--cell h:bs-sm">
    <h2 className="fs-body3 lh-sm fc-dark">Small box shadow on :hover</h2>
    <p className="fs-body1 fc-medium mb8">
      This is a description of the card's content.
    </p>
    <Button variant="link">Learn more</Button>
  </Card>
  <Card as="a" href="#" className="grid--cell h:bs-md">
    <h2 className="fs-body3 lh-sm fc-dark">Medium box shadow on :hover</h2>
    <p className="fs-body1 fc-medium mb8">
      This is a description of the card's content.
    </p>
    <Button variant="link">Learn more</Button>
  </Card>
  <Card as="a" href="#" className="grid--cell h:bs-lg">
    <h2 className="fs-body3 lh-sm fc-dark">Large box shadow on :hover</h2>
    <p className="fs-body1 fc-medium mb8">
      This is a description of the card's content.
    </p>
    <Button variant="link">Learn more</Button>
  </Card>
</View>;
```

## Muted

When a card is disabled or considered completed, apply the muted modifier to visually dim the card.

```jsx padded
import { View } from '../index';

<View className="grid grid__allcells4 fw-wrap ai-stretch md:fd-column gs12">
  <Card variant="muted" className="grid--cell">
    <h2 className="fs-body3 lh-sm fc-dark">Base card title</h2>
    <p className="fs-body1 fc-medium">
      This is a description of the card's content.
    </p>
  </Card>
  <Card variant="muted" as="a" href="#" className="grid--cell">
    <h2 className="fs-body3 lh-sm fc-dark">Linked card title</h2>
    <p className="fs-body1 fc-medium">
      This is a description of the card's content.
    </p>
  </Card>
</View>;
```

## Stacked

First introduced for our collections feature in Teams, cards can also be stacked to imply multiple sections or items. No need to overthink it, we can just nest our cards. Note: You’ll need to compensate for the 4px of nesting on that right edge to keep things equidistant.

```jsx padded
<Card className="p0">
  <Card className="ps-relative b4 l4">
    <h2 className="fs-body3 lh-sm fc-dark">Base card title</h2>
    <p className="fs-body1 fc-medium">
      This is a description of the card's content.
    </p>
  </Card>
</Card>
```
