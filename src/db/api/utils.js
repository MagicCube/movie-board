import Immutable from 'immutable';


const API_KEY = '0df993c66c0c636e29ecbb5344252a4a';

function fetch(path, requiresAPIKey = false, args = {}) {
  return $.ajax({
    url: path,
    data: {
      ...args,
      apiKey: requiresAPIKey ? API_KEY : undefined
    }
  });
}

/**
 * Create a new GET resource.
 *
 * @param {string} path Path of resource.
 * @param {bool} [false] Whether API Key is needed.
 * @param {function} [payloadHandler=payload => payload] Handler of payload.
 * @param {function} [responseHandler=response => response] Handler of response.
 * @returns
 */
export function get(
  path,
  requiresAPIKey = false,
  payloadHandler = payload => payload,
  responseHandler = response => Immutable.fromJS(response)) {
  return async (payload) => {
    let url = null;
    if (typeof path === 'function') {
      url = path(payload);
    }
    else {
      url = path;
    }
    const args = payloadHandler(payload);
    const response = await fetch(url, requiresAPIKey, args);
    return responseHandler(response);
  };
}
