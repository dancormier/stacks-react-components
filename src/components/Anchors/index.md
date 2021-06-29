## Descendent anchors

### Descendent anchor examples

Sometimes you need to give all <a> elements inside a container or component the same color, even when it‘s impractical or even impossible to give each anchor element an s-link class (e.g. because the markup is generated from Markdown).

In this case, you can add the s-anchors class together with one of the variants `default`, `grayscale`, `muted`, `danger`, or `inherit` to the component.

```jsx padded
import { Button } from '../index';

const Demo = () => (
  <p>
    There is a <a href="#">default link here</a>,
    <Button variant="link">a button</Button>, and <a href="#">another one</a>.
  </p>
);

<>
  <Anchors className="s-card mb8">
    <Demo />
  </Anchors>
  <Anchors variant="grayscale" className="s-card mb8 fc-orange-700">
    <Demo />
  </Anchors>
  <Anchors variant="muted" className="s-card mb8">
    <Demo />
  </Anchors>
  <Anchors variant="danger" className="s-card mb8">
    <Demo />
  </Anchors>
  <Anchors variant="underlined" className="s-card mb8">
    <Demo />
  </Anchors>
  <Anchors variant="inherit" className="s-card mb8 fc-green-500">
    <Demo />
  </Anchors>
</>;
```

One additional level of nesting is supported, but even that should be exceedingly rare. More than that is not supported.

```jsx padded
<Anchors variant="danger" className="s-card">
  <p>
    All <a href="#">links</a> in this <a href="#">outer box</a>
    are <a href="#">dangerous</a>.
  </p>
  <Anchors className="s-card w70 mt8">
    <p>
      But all <a href="#">links</a> in this <a href="#">inner box</a>
      have the <a href="#">default</a> link color.
    </p>
  </Anchors>
</Anchors>
```

An `<Link />` overrides any `<Anchors />` setting:

```jsx padded
import { Link } from '../index';

<>
  <Anchors variant="danger" className="s-card">
    All <a href="#">links</a> in this <a href="#">box</a> are{' '}
    <a href="#">dangerous</a>, except for <Link>this one</Link> which uses the
    default color, and
    <Link variant="muted">this muted link</Link>.
  </Anchors>
</>;
```
