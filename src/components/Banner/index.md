```jsx padded
import { Button, Icon, View } from '../index';

const DemoBanner = ({ variant, important, pinned }) => (
  <Banner
    variant={variant}
    important={important}
    pinned={pinned}
    className="ps-relative"
  >
    <View className="d-flex">
      <View className="flex--item mr8">
        <Icon name="Lock" aria-hidden="true" />
      </View>
      <p class="m0">
        <strong>Stacks is currently frozen in read-only mode.</strong> Contact
        the team to restore access.
      </p>
    </View>
  </Banner>
);

const BannerApp = ({ children }) => {
  const [variant, setVariant] = React.useState('info');
  const [important, setImportant] = React.useState(false);
  const [pinned, setPinned] = React.useState(true);

  return (
    <>
      <View className="bar-sm bg-black-050 ba bc-black-3 d-flex p16">
        <View className="flex--item">
          <label class="s-label fs-body1" for="demo-banner-style">
            Style
          </label>
          <View className="s-select">
            <select
              id="demo-banner-style"
              onChange={e => setVariant(e.target.value)}
            >
              {['info', 'success', 'warning', 'danger'].map(opt => (
                <option value={opt}>{opt}</option>
              ))}
            </select>
          </View>
        </View>
        {[
          {
            label: 'important',
            callback: setImportant,
            defaultChecked: important,
          },
          { label: 'pinned', callback: setPinned, defaultChecked: pinned },
        ].map(item => (
          <View className="flex--item ai-center d-flex ml16">
            <input
              id={`demo-banner-${item.label}`}
              type="checkbox"
              class="flex--item s-checkbox"
              onChange={e => item.callback(e.target.checked)}
              defaultChecked={item.defaultChecked}
            />
            <label
              for={`demo-banner-${item.label}`}
              className="s-label flex--item fs-body1 fw-bold ml8"
            >
              {item.label}?
            </label>
          </View>
        ))}
      </View>
      <View className="ps-relative">
        <DemoBanner variant={variant} important={important} pinned={pinned} />
      </View>
    </>
  );
};

<BannerApp />;
```
