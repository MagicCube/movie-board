import React from 'react';

import Cover from './Cover';

export default function CoverList(props) {
  const items = props.subjects.map(subject => (
    <li key={subject.id} className="mb-cover-list-item">
      <Cover subject={subject} isSelected={props.selectedSubjectId === subject.id} actions={props.actions} />
    </li>
  ));
  return (
    <ul className="mb-cover-list">
      {items}
    </ul>
  );
}

CoverList.propTypes = {
  actions: React.PropTypes.object,
  selectedSubjectId: React.PropTypes.string,
  subjects: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string
  })),
};

CoverList.defaultProps = {
  actions: {},
  selectedSubjectId: null,
  subjects: []
};
