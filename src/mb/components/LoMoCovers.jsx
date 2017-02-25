import cs from 'classnames';
import React from 'react';

import MoCover from './MoCover';

import '../res/lomo-covers.less';

export default function LoMoCovers(props) {
  const items = props.subjects.map(subject => (
    <li
      key={subject.id}
      className={cs('mb-lomo-covers-cell', { selected: props.selectedSubjectId === subject.id })}
      onClick={() => props.actions.selectSubject(subject)}
    >
      <MoCover subject={subject} actions={props.actions} />
      <div className="selection-indicator">
        <div className="arrow" />
      </div>
    </li>
  ));
  return (
    <ul className="mb-lomo-covers">
      {items}
    </ul>
  );
}

LoMoCovers.propTypes = {
  actions: React.PropTypes.shape({
    selectSubject: React.PropTypes.func
  }).isRequired,
  selectedSubjectId: React.PropTypes.string,
  subjects: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string
  })),
};

LoMoCovers.defaultProps = {
  selectedSubjectId: null,
  subjects: []
};
