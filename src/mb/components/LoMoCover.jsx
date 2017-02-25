import React from 'react';

import MoCover from './MoCover';

import '../res/lomo-cover.less';

export default function LoMoCover(props) {
  const items = props.subjects.map(subject => (
    <li key={subject.id} className="mb-lomo-cover-item">
      <MoCover subject={subject} isSelected={props.selectedSubjectId === subject.id} actions={props.actions} />
    </li>
  ));
  return (
    <ul className="mb-lomo-cover">
      {items}
    </ul>
  );
}

LoMoCover.propTypes = {
  actions: React.PropTypes.object,
  selectedSubjectId: React.PropTypes.string,
  subjects: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string
  })),
};

LoMoCover.defaultProps = {
  actions: {},
  selectedSubjectId: null,
  subjects: []
};
