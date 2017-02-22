import $ from 'jquery';


const API_URL = 'http://api.douban.com/v2/movie';
const API_KEY = '0df993c66c0c636e29ecbb5344252a4a';


export default {
  in_theaters: createMethod('in_theaters'),
  coming_soon: createMethod('coming_soon'),
  top250: createMethod('top250'),
};


function fetch(path, args) {
  return $.ajax({
    url: `${API_URL}/${path}`,
    data: {
      ...args,
      apikey: API_KEY
    }
  });
}

function createMethod(
  path,
  payloadHandler = payload => payload,
  responseHandler = response => response) {
  return async (payload) => {
    const args = payloadHandler(payload);
    const response = await fetch(path, args);
    return responseHandler(response);
  };
}
