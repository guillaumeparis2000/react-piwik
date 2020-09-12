// Version-loose types for the `history` methods used by this module
// - These must be updated for newer versions of `history` and as more methods are used
type Location = {
  path: string;
} | {
  pathname: string;
  search: string;
}
interface History3 {
  getCurrentLocation(): Location;
}
interface History4 {
  location: Location;
}
type LooseHistory = {
  listen(listener: (location: Location, ...unknownArgs: unknown[]) => void): () => void;
} & (History3 | History4);

/**
 * Options for the `Piwik`/`ReactPiwik` constructor
 */
type PiwikOptions = {
  url: string;
  siteId: number;
  jsFilename?: string;
  phpFilename?: string;
  enableLinkTracking?: boolean;
  trackDocumentTitle?: boolean;
  pathBasename?: string;
}

/**
 * @class
 * @param {Object} options Options for the `ReactPiwik` constructor
 * @example <caption>Initializing piwik and connecting to the history</caption>
 * const piwik = new ReactPiwik({
 *   url: 'your-piwik-server-url.com',
 *   siteId: 12,
 * });
 *
 * <Router history={piwik.connectToHistory(history)} />
 */
export default class ReactPiwik {
  constructor(options: PiwikOptions);
  /**
   * @method
   * @description Connect router history to Piwik
   * @param {History} history History object from the history package
   */
  connectToHistory<H extends LooseHistory>(history: H): H;
  /**
   * @method
   * @description Disconnect router history from Piwik
   */
  disconnectFromHistory(): boolean;
  /**
   * @method
   * @description Track a page view on a given location
   * @param {Location} location Location from the history package
   */
  track (location: Location): void;
  /**
   * @method
   * @description Push directly to the Piwik command queue
   * @param {Array} args Commands to send to Piwik
   */
  static push (args: unknown[]): void;
}
