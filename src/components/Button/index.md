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

#### Modifiers
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
