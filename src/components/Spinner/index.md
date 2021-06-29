## Examples

The spinner’s colors are based on the font color of the element, which will usually be inherited from its parent. If you need to apply a color override, the font color classes can provide themability. In most situations, a black and white spinner based on the default font color will be appropriate.

For accessibility, it’s important to add fallback loading text that is visible to screen readers. Additionally, you should add `aria-busy="true"` to the component that triggered the loading state while the spinner is shown.

```jsx padded
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner />
<Spinner size="md" />
<Spinner size="lg" className="fc-orange-400" />
```
