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
});

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={piwik.connectToHistory(history)} />
  </Provider>,
  document.getElementById('root'),
);
```

You can optionally pass custom filenames if you have renamed your tracker urls (to prevent browser/adblock from blocking piwik)  :
```js
const piwik = new ReactPiwik({
  url: 'your-piwik-server-url.com',
  siteId: 12,
  jsFilename: 'obfuscated-name.js',
  phpFilename: 'obfuscated-name.php'
});
```

If you want to add (push) more piwik options you can do using push after you've setup the initial tracker. Also, if you want to track the first page view be sure to do a push:

```js
ReactPiwik.push(['enableHeartBeatTimer'])
ReactPiwik.push(['setUserId', 'userId'])

// track the initial pageview
ReactPiwik.push(['trackPageView'])
```

On any page of your app you can track an event using push:

```js
import ReactPiwik from 'react-piwik';

ReactPiwik.push(['trackEvent', 'eventCategory', 'yourEvent']);
```

## Options
### enableLinkTracking: true
Link tracking to track outgoing and download links is enabled by default.

### trackDocumentTitle: true
Updates the document title before adding a new page view as the title may changed during the route rendering.

## API
### push(args)
Pushes the specified args to the Piwik tracker the same way as you're using the _paq.push(args); directly.

### connectToHistory(history)
Adds a listener to the passed in history and triggers track(location) whenever the history changes.

### disconnectFromHistory()
Disconnects Piwik from a previous connected history. Returns whether it could successfully disconnect.

## Contributing

1. Fork the repo
2. Make changes to `src/React-Piwik.js`
3. run `npm i && npm run build`
4. Commit changes and make pull request
