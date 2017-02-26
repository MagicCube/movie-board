import React from 'react';

import '../res/mo-detail-row.less';

const TYPES = {
  casts: '演员',
  directors: '导演',
  genres: '类型'
};

/**
 * Represent a inline list in a detail row of MoJumbotron.
 */
export default recompose.pure(({
  data,
  type
}) => {
  let items = null;
  if (type === 'genres') {
    items = data.map(genre => <li key={genre}>{genre}</li>);
  } else {
    items = data.map(people => <li key={people.id}>{people.name}</li>);
  }

  return (
    <dl className={`mb-mo-detail-row ${type}`}>
      <dt>{TYPES[type]}</dt>
      <dd>
        <ul>
          {items}
        </ul>
      </dd>
    </dl>
  );
});
