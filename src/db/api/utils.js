import Immutable from 'immutable';


const API_KEY = '0df993c66c0c636e29ecbb5344252a4a';

function fetch(
  path,
  { requiresAPIKey = false } = {},
  args = {}) {
  return $.ajax({
    url: path,
    data: {
      ...args,
      apiKey: requiresAPIKey ? API_KEY : undefined
    }
  });
}

function getKey(url, args) {
  return `${url}|${args ? JSON.stringify(args) : ''}`;
}

/**
 * Create a new GET resource.
 *
 * @param {string} path Path of resource.
 * @param {options} [{ requiresAPIKey: false, cache: false }] Options including .
 * @param {function} [payloadHandler=payload => payload] Handler of payload.
 * @param {function} [responseHandler=response => response] Handler of response.
 * @returns
 */
export function get(
  path,
  options = { requresAPIKey: false, cache: false },
  payloadHandler = payload => payload,
  responseHandler = response => Immutable.fromJS(response)) {
  return async (payload) => {
    let url = null;
    if (typeof path === 'function') {
      url = path(payload);
    } else {
      url = path;
    }
    const args = payloadHandler(payload);
    const key = getKey(url, args);
    if (options.cache && sessionStorage.getItem(key)) {
      const cachedObj = JSON.parse(sessionStorage.getItem(key));
      return responseHandler(cachedObj);
    }
    const response = await fetch(url, options, args);
    if (options.cache) {
      sessionStorage.setItem(key, JSON.stringify(response));
    }
    const result = responseHandler(response);
    return result;
  };
}
