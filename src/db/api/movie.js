import { get } from './utils';

export default {
  comingSoon: get('/data/coming_soon.json'),
  inTheaters: get('/data/in_theaters.json'),
  subject: get(subjectId => `/api/movie/subject/${subjectId}`, true),
  top250: get('top250'),
};
