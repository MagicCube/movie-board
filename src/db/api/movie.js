const API_URL = 'http://api.douban.com/v2/movie';
const API_KEY = '0df993c66c0c636e29ecbb5344252a4a';


export default {
  inTheaters: createMethod('/data/in_theaters.json'),
  comingSoon: createMethod('/data/coming_soon.json'),
  top250: createMethod('top250')
};


function fetch(path, args) {
  const url = path.startsWith('/') ? path : `${API_URL}/${path}`;
  return $.ajax({
    url,
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
