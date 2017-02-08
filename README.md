# React-Piwik library

This library is inspired by [piwik-react-router](https://github.com/joernroeder/piwik-react-router) for the react-router part
and publish a public method to track custom events.

## Installation
```sh
npm install --save react-piwik
```
or
```sh
yarn add react-piwik
```

## Usage

To use it you might create an instance of React-Piwik with the piwik server url and siteID and connect it to your history:
```js
import ReactPiwik from 'react-piwik';

const piwik = new ReactPiwik({
  url: 'your-piwik-server-url.com',
  siteId: 12,
  trackErrors: true,
});

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={piwik.connectToHistory(history)} />
  </Provider>,
  document.getElementById('root'),
);

[...]
ReactPiwik.push(['yourEvent', '123']);
```

## Options
### enableLinkTracking: true
Link tracking to track outgoing and download links is enabled by default.

###updateDocumentTitle: true
Updates the document title before adding a new page view as the title may changed during the route rendering.

## API
### push(args)
Pushes the specified args to the Piwik tracker the same way as you're using the _paq.push(args); directly.

### connectToHistory(history)
Adds a listener to the passed in history and triggers track(location) whenever the history changes.

### disconnectFromHistory()
Disconnects Piwik from a previous connected history. Returns whether it could successfully disconnect.
