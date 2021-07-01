## Usage

Stacks icons are designed to be directly injected into the markup as an svg element. This allows us to color them on the fly using any of our atomic classes. We have different helpers in different environments.

### Production

If you’re in Stack Overflow’s production environment, we have a helper that can be called with @Svg. and the icon name, eg. @Svg.Alert. By default, any icon will inherit the text color of the parent element. Optionally, you can pass the class native to the icon to render any native colors that are included eg. @Svg.Ballon.With("native"). This same syntax allows you to pass additional arbitrary classes like atomic helpers, or js- prefixed classes.

```jsx padded
import { View } from '../index';

<View className="d-flex flex__fl-equal">
  <View className="flex--item">
    <div className="fc-medium mb12">Default</div>
    <Icon name="Logo" />
  </View>
  <View className="flex--item">
    <div className="fc-medium mb12">With native colors</div>
    <Icon name="Logo" native />
  </View>
  <View className="flex--item">
    <div className="fc-medium mb12">With arbitrary classes</div>
    <Icon name="Logo" />
  </View>
</View>;
```
