import React from 'react';

import MoCover from './MoCover';

import '../res/mo-cover-list.less';

export default function MoCoverList(props) {
  const items = props.subjects.map(subject => (
    <li key={subject.id} className="mb-mo-cover-list-item">
      <MoCover subject={subject} isSelected={props.selectedSubjectId === subject.id} actions={props.actions} />
    </li>
  ));
  return (
    <ul className="mb-mo-cover-list">
      {items}
    </ul>
  );
}

MoCoverList.propTypes = {
  actions: React.PropTypes.object,
  selectedSubjectId: React.PropTypes.string,
  subjects: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string
  })),
};

MoCoverList.defaultProps = {
  actions: {},
  selectedSubjectId: null,
  subjects: []
};
