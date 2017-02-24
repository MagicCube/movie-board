import React from 'react';

import CoverListItem from './CoverListItem';

export default function CoverList(props) {
  const items = props.subjects.map(subject => (
    <CoverListItem key={subject.id} subject={subject} />
  ));
  return (
    <ul className="mb-cover-list">
      {items}
    </ul>
  );
}

CoverList.propTypes = {
  subjects: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string
  }))
};

CoverList.defaultProps = {
  subjects: []
};
