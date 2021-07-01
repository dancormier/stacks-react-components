## Examples

### Default tag

```jsx padded
<Tag href="#">Default</Tag>
<Tag href="#" dismissable>JavaScript</Tag>
<Tag
  href="#"
  sponsor={{
    src: "https://i.stack.imgur.com/tKsDb.png",
    alt: "Google Android",
    height: '18px',
    width: '16px',
  }}
>
  Android
</Tag>
<Tag className="is-selected" href="#" dismissable>razor</Tag>
```

### Moderator

```jsx padded
<Tag href="#" variant="moderator">status-completed</Tag>
<Tag href="#" variant="moderator" dismissable>status-bydesign</Tag>
<Tag href="#" variant="moderator">status-planned</Tag>
<Tag className="is-selected" href="#" variant="moderator">status-deferred</Tag>
```

### Required

```jsx padded
<Tag href="#" variant="required">discussion</Tag>
<Tag href="#" variant="required" dismissable>feature-request</Tag>
<Tag href="#" variant="required">bug</Tag>
<Tag className="is-selected" href="#" variant="required">featured</Tag>
```

### Muted

```jsx padded
<Tag href="#" variant="muted">asp-net</Tag>
<Tag href="#" variant="muted" dismissable>netscape</Tag>
<Tag
  href="#"
  variant="muted"
  sponsor={{
    src: "https://i.stack.imgur.com/gfrSH.png",
    alt: "SQL Server",
    height: '18px',
    width: '16px',
  }}
>
  sql-server
</Tag>
<Tag className="is-selected" href="#" variant="muted">razor</Tag>
```

### Sizes

```jsx padded
<Tag href="#" size="xs">
  CSS
</Tag>
<Tag href="#" size="sm">
  CSS
</Tag>
<Tag href="#">
  CSS
</Tag>
<Tag href="#" size="md">
  CSS
</Tag>
<Tag href="#" size="lg">
  CSS
</Tag>
```
