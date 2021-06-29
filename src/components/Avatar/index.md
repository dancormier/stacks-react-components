## Examples

### Users

Remember, you’ll want to double the size of the avatar image to account for retina screens.

```jsx padded
<Avatar src="https://picsum.photos/32" alt="Tiny Stacky" />
<Avatar size={32} src="https://picsum.photos/64" alt="Stacky" />
<Avatar size={64} src="https://picsum.photos/128" alt="Large Stacky" />
<Avatar size={128} src="https://picsum.photos/256" alt="Fat Stacky" />
```

### Teams

When displaying a team’s identity, we badge the avatar with a shield. We fall back to the first letter of their name and a color we choose at random. As team administrators add more data—choosing a color or uploading an avatar—we progressively enhance the avatar.

In this example, from left to right, we have a team name of Hum with no avatar or custom color. In the middle we have a team name of Hum with a custom color. In the last example, we have a team name of Hum with a custom avatar applied.

```jsx padded
<Avatar letter="d" size={128} className="bg-blue-400" />
<Avatar letter="c" size={64} className="bg-blue-400" />
<Avatar letter="b" size={32} className="bg-blue-400" />
<Avatar letter="a" className="bg-blue-400" />
```
