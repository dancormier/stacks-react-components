By default, our indicator has no positioning attached to it. Depending on your context, you can modify the activity indicator’s positioning using any combination of atomic classes. Since our activity indicator has no inherent semantic meaning, make sure to include visually-hidden, screenreader-only text.

## Examples
```jsx padded
import { Avatar } from '../index';
import Icons from '@stackoverflow/stacks-icons';

<>
  <ActivityIndicator />
  <div className="mt16">
    <a href="#" className="s-link s-link__muted">
      <Avatar letter="g" className="bg-red-400 ps-relative">
        <ActivityIndicator className="ps-absolute tn6 ln6" />
      </Avatar>
      <span className="pl4">Grayson</span>
    </a>
  </div>
  <div className="mt16 fc-medium ps-relative d-inline-block">
    <span className="fc-black-500" dangerouslySetInnerHTML={{ __html: Icons.Bell }} />
    <ActivityIndicator className="ps-absolute tn4 rn4" />
  </div>
</>
```
