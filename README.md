# React Ingress

React Ingress is a set of Components that allow you to render components in different location in a React tree. Think React Portals that are in the same react tree. The reason for the creation behind something like React Ingress is to be able to render a component in a scope part of a tree but to still all for full configurability of parent or sibling components contents.

## Install

```shell
npm i @mujo/ingress
```

## Usage

### Provider

To provide information between multiple components Ingress needs a provider to provide the information to the children components.

This does not need to be top level but needs to at least be above the other Ingress components.

```javascript
import { IngressProvider } from '@mujo/ingress'
const MyTopLevelComponent = () => (
  <IngressProvider>{/* children need to be in this scope */}</IngressProvider>
)
```

### Target

The target component is the place where the nodes will be rendered. There is the ability to have multiple targets in the same application so giving the target an id allows you to specify the "name" of the target. If multiple children are rendered to this target it will iterate through all of them and place them in the order that they were rendered in the tree.

```javascript
import { IngressTarget } from '@mujo/ingress'
const MySiblingComponent = () => (
  <ul className="just-a--demo" id="sibling">
    <IngressTarget id="sibling" />
  </ul>
)
```

### Ingress ( doorway )

The Ingress component is essentially opens up the doorway to the target component and allows you to render content inside of the target. If a target is specified you can share children.

```javascript
import { Ingress } from '@mujo/ingress'
const MyChildComponent = ({ children }) => (
  <Ingress target="sibling">
    {' '}
    // from prior sample
    <li>{children}</li>
  </Ingress>
)
```

The children are inject via `useEffect` so this happens after the initial render and DOM nodes will not be available during some instances like **server side rendering**.

### What the full output looks like

If you take the code from the demo and render out two `MyChildComponent`s like this.

```javascript
...
<MyChildComponent>Foo</MyChildComponent>
<MyChildComponent>Bar</MyChildComponent>
```

The output of the target component or `MySiblingComponent` would looks something like this.

```html
<ul className="just-a--demo" id="sibling">
  <li>Foo</li>
  <li>Bar</li>
</ul>
```

## Contribution

Contributions are always welcomed! Feel free to open an issue with a question or concern.
