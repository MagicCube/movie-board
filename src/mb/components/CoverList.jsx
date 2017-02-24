import React from 'react';

import Cover from './Cover';

export default function CoverList(props) {
  const items = props.subjects.map(subject => (
    <li key={subject.id} className="mb-cover-list-item">
      <Cover subject={subject} isSelected={false} actions={props.actions} />
    </li>
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
  })),
  actions: React.PropTypes.object
};

CoverList.defaultProps = {
  subjects: [],
  actions: {}
};
