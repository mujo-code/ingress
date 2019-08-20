# React Ingress

React Ingress is a set of Components that allow you to render components in different location in a React tree. Think React Portals that are in the same react tree.

## Install

```shell
npm i @mujo/ingress
```

## Usage

> Project is still experimental. Please, hold off on using it in production the api may change.

```javascript
function App() {
  return (
    <IngressProvider>
      <div className="App">
        <div id="target">
          <IngressTarget id="header" />
        </div>
        <div id="portal-content">
          <Ingress target="header">
            <div>Hello world</div>
          </Ingress>
          <Ingress target="header">
            <div>Two Children</div>
          </Ingress>
          <Ingress target="header">
            <div>Three Children</div>
          </Ingress>
        </div>
      </div>
    </PortalProvider>
  )
}
```
