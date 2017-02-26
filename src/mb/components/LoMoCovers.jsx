import cs from 'classnames';
import React from 'react';

import MoCover from './MoCover';

import '../res/lomo-covers.less';

/**
 * Represent a "List of Movie Covers" inside a LoLoMo Row.
 */
export default function LoMoCovers({ actions, selectedSubjectId, subjects }) {
  const items = subjects.map(subject => (
    <li
      key={subject.id}
      className={cs('mb-lomo-covers-cell', { selected: selectedSubjectId === subject.id })}
      onClick={e => {
        actions.selectSubject(subject);
        $(document.body).animate({
          scrollTop: e.currentTarget.offsetTop - $('.mb-app-header').height() - 8
        }, 400);
      }}
    >
      <MoCover subject={subject} />
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
