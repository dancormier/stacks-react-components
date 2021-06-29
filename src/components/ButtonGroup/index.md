## Example

```jsx padded
import { Button, ButtonGroupContainer } from '../index';

<>
  <ButtonGroup>
    <Button modifier="outlined" variant="muted">
      Newest
    </Button>
    <Button modifier="outlined" variant="muted">
      Frequent
    </Button>
    <ButtonGroupContainer as="form">
      <Button modifier="outlined" variant="muted" className="is-selected">
        Votes
      </Button>
    </ButtonGroupContainer>
    <Button modifier="outlined" variant="muted">
      Active
    </Button>
    <ButtonGroupContainer as="form">
      <Button modifier="outlined" variant="muted">
        Unanswered
      </Button>
    </ButtonGroupContainer>
  </ButtonGroup>
</>;
```

## Counts

Counts are used to display a numerical count inside a button group. This is good for large data sets where it’s helpful to quickly know how many items are behind each filter.

```jsx padded
import { Button, ButtonGroupContainer } from '../index';

<>
  <ButtonGroup>
    <Button modifier="outlined" variant="muted" badge={197}>
      Active
    </Button>
    <Button modifier="outlined" variant="muted" badge={37}>
      Inactive
    </Button>
    <Button modifier="outlined" variant="muted" badge={234}>
      All
    </Button>
  </ButtonGroup>
</>;
```
