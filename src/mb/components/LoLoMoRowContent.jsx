import React from 'react';

import LoLoMoCell from './LoLoMoCell';

export default function LoLoMoRowContent(props) {
  const items = props.subjects.map(subject => (
    <LoLoMoCell key={subject.id} subject={subject} />
  ));
  return (
    <div className="mb-lolomo-row-content">
      <ul className="movie-list">
        {items}
      </ul>
    </div>
  );
}

LoLoMoRowContent.propTypes = {
  subjects: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string
  }))
};

LoLoMoRowContent.defaultProps = {
  subjects: []
};
