See also [Breadcrumb](/#/Stacks/Breadcrumb) and [BreadcrumbLink](/#/Stacks/BreadcrumbLink).

## Examples

Breadcrumbs show users where they are within a site’s hierarchy. Breadcrumbs help orient the user and allow for navigation to previous page levels. It can be appropriate to use a breadcrumb when:

- The user is more than 2 levels of navigation deep
- The current page does not have its own navigation
- The user needs to quickly go back to the previous parent page

Breadcrumbs should be the first page element—placed directly above the page’s title. The page the user is on should not appear in the breadcrumb trail, since that indicator is satisfied by the title of the page itself. Additionally, the last .s-breadcrumb--item shouldn’t include the divider.

It is not appropriate to use Breadcrumbs when:

- There is only one level of navigation.
- There isn’t a clear navigation path or the page is orphaned.

### Stack Overflow

```jsx padded
import { Breadcrumb, BreadcrumbLink, Icon } from '../index';
import Icons from '@stackoverflow/stacks-icons';

<Breadcrumbs>
  <Breadcrumb>
    <BreadcrumbLink href="#" aria-label="Stack Overflow">
      <Icon>{Icons.LogoGlyphXxs}</Icon>
    </BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbLink href="#">Help center</BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb showDivider={false}>
    <BreadcrumbLink href="#">Asking</BreadcrumbLink>
  </Breadcrumb>
</Breadcrumbs>;
```

### Stack Exchange

```jsx padded
import { Breadcrumb, BreadcrumbLink, Icon } from '../index';
import Icons from '@stackoverflow/stacks-icons';

<Breadcrumbs>
  <Breadcrumb>
    <BreadcrumbLink href="#" aria-label="Stack Exchange">
      <Icon>{Icons.LogoSEXxs}</Icon>
    </BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb showDivider={false}>
    <BreadcrumbLink href="#">Review queues</BreadcrumbLink>
  </Breadcrumb>
</Breadcrumbs>;
```

### Teams

```jsx padded
import { Avatar, Breadcrumb, BreadcrumbLink } from '../index';
import Icons from '@stackoverflow/stacks-icons';

<Breadcrumbs>
  <Breadcrumb>
    <BreadcrumbLink href="#" aria-label="Stack Exchange">
      <Avatar letter="h" className="bg-blue-400 ps-relative" />
      <span className="pl4">Hum</span>
    </BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbLink href="#">Settings</BreadcrumbLink>
  </Breadcrumb>
  <Breadcrumb showDivider={false}>
    <BreadcrumbLink href="#">Billing</BreadcrumbLink>
  </Breadcrumb>
</Breadcrumbs>;
```
