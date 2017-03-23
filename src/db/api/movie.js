import { get } from './utils';

export default {
  comingSoon: get('/data/coming_soon.json'),
  inTheaters: get('/data/in_theaters.json'),
  search: get('/api/movie/search', undefined, payload => ({ q: payload.query })),
  subject: get(subjectId => `/api/movie/subject/${subjectId}`, { requiresAPIKey: true, cache: sessionStorage }, () => null),
  top20: get('/data/top20.json')
};
