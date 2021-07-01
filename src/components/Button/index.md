## Styles

Stacks provides 4 different button styles:

- Secondary
- Primary
- Danger
- Muted

Each style is explained below, detailing how and where to use these styles.

### Secondary

All buttons, by default, are secondary buttons. There are three, graduating secondary styles:

- Clear (default)
- Outlined
- Filled

A button’s visual weight should correspond to the importance of the button’s action. The more important the action, the heavier the button’s visual weight.

```jsx padded
<h4 className="fs-subheading">Clear</h4>
<Button>Ask question</Button>
<Button className="is-selected" aria-pressed="true">Selected</Button>
<Button disabled>Disabled</Button>

<h4 className="fs-subheading mt24">Outlined</h4>
<Button modifier="outlined">Ask question</Button>
<Button modifier="outlined" className="is-selected" aria-pressed="true">Selected</Button>
<Button modifier="outlined" disabled>Disabled</Button>

<h4 className="fs-subheading mt24">Filled</h4>
<Button modifier="filled">Ask question</Button>
<Button modifier="filled" className="is-selected" aria-pressed="true">Selected</Button>
<Button modifier="filled" disabled>Disabled</Button>
```

### Primary

A visual style used to highlight the most important actions. To avoid confusing users, don’t use more than one primary button within a section or view.

```jsx padded
<Button variant="primary">Ask question</Button>
<Button variant="primary" className="is-selected" aria-pressed="true">Selected</Button>
<Button variant="primary" disabled>Disabled</Button>
```

### Danger

Danger buttons are a secondary button style, used to visually communicate destructive actions such as deleting content, accounts, or canceling services.

```jsx padded
<h4 className="fs-subheading">Clear</h4>
<Button variant="danger">Ask question</Button>
<Button variant="danger" className="is-selected" aria-pressed="true">Selected</Button>
<Button variant="danger" disabled>Disabled</Button>

<h4 className="fs-subheading mt24">Outlined</h4>
<Button variant="danger" modifier="outlined">Ask question</Button>
<Button variant="danger" modifier="outlined" className="is-selected" aria-pressed="true">Selected</Button>
<Button variant="danger" modifier="outlined" disabled>Disabled</Button>

<h4 className="fs-subheading mt24">Filled</h4>
<Button variant="danger" modifier="filled">Ask question</Button>
<Button variant="danger" modifier="filled" className="is-selected" aria-pressed="true">Selected</Button>
<Button variant="danger" modifier="filled" disabled>Disabled</Button>
```

### Loading

Any button can have a loading state applied by adding the `loading` prop.

```jsx padded
<h4 className="fs-subheading">Primary</h4>
<Button loading variant="primary">Ask question</Button>
<Button loading variant="primary" className="is-selected" aria-pressed="true">Selected</Button>
<Button loading variant="primary" disabled>Disabled</Button>

<h4 className="fs-subheading">Secondary, clear</h4>
<Button loading>Ask question</Button>
<Button loading className="is-selected" aria-pressed="true">Selected</Button>
<Button loading disabled>Disabled</Button>

<h4 className="fs-subheading">Danger</h4>
<Button loading variant="danger">Ask question</Button>
<Button loading variant="danger" className="is-selected" aria-pressed="true">Selected</Button>
<Button loading variant="danger" disabled>Disabled</Button>

<h4 className="fs-subheading">Muted</h4>
<Button loading variant="muted">Ask question</Button>
<Button loading variant="muted" className="is-selected" aria-pressed="true">Selected</Button>
<Button loading variant="muted" disabled>Disabled</Button>
```

### Dropdown

Adding the prop `dropdown` to any button style will add an appropriately-styled caret. These should be paired with a menu or popover.

```jsx padded
<h4 className="fs-subheading">Primary</h4>
<Button dropdown variant="primary">Ask question</Button>
<Button dropdown variant="primary" className="is-selected" aria-pressed="true">Selected</Button>
<Button dropdown variant="primary" disabled>Disabled</Button>

<h4 className="fs-subheading">Secondary, clear</h4>
<Button dropdown>Ask question</Button>
<Button dropdown className="is-selected" aria-pressed="true">Selected</Button>
<Button dropdown disabled>Disabled</Button>

<h4 className="fs-subheading">Danger</h4>
<Button dropdown variant="danger">Ask question</Button>
<Button dropdown variant="danger" className="is-selected" aria-pressed="true">Selected</Button>
<Button dropdown variant="danger" disabled>Disabled</Button>

<h4 className="fs-subheading">Muted</h4>
<Button dropdown variant="muted">Ask question</Button>
<Button dropdown variant="muted" className="is-selected" aria-pressed="true">Selected</Button>
<Button dropdown variant="muted" disabled>Disabled</Button>
```

### Badges

Adding the `badge` prop to any button will add an appropriately-styled badge.

```jsx padded
<h4 className="fs-subheading">Primary</h4>
<Button badge={198} variant="primary">Ask question</Button>
<Button badge={198} variant="primary" className="is-selected" aria-pressed="true">Selected</Button>
<Button badge={198} variant="primary" disabled>Disabled</Button>

<h4 className="fs-subheading">Secondary, clear</h4>
<Button badge={198}>Ask question</Button>
<Button badge={198} className="is-selected" aria-pressed="true">Selected</Button>
<Button badge={198} disabled>Disabled</Button>

<h4 className="fs-subheading">Danger</h4>
<Button badge={198} variant="danger">Ask question</Button>
<Button badge={198} variant="danger" className="is-selected" aria-pressed="true">Selected</Button>
<Button badge={198} variant="danger" disabled>Disabled</Button>

<h4 className="fs-subheading">Muted</h4>
<Button badge={198} variant="muted">Ask question</Button>
<Button badge={198} variant="muted" className="is-selected" aria-pressed="true">Selected</Button>
<Button badge={198} variant="muted" disabled>Disabled</Button>
```

### Sizes

```jsx padded
<Button variant="primary" size="xs">Ask question</Button>
<Button variant="primary" size="sm">Ask question</Button>
<Button variant="primary">Ask question</Button>
<Button variant="primary" size="md">Ask question</Button>
```
