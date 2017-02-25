import React from 'react';
import cs from 'classnames';

export default function MoCover(props) {
  const {
    subject,
    isSelected,
    actions: {
      selectSubject
    }
  } = props;
  return (
    <a className={cs('mb-mo-cover', { selected: isSelected })} onClick={typeof selectSubject === 'function' ? () => selectSubject(subject) : null}>
      <div className="cover-image" style={{ backgroundImage: `url(${subject.images.large})` }} />
    </a>
  );
}

MoCover.propTypes = {
  actions: React.PropTypes.shape({
    selectSubject: React.PropTypes.func
  }).isRequired,
  isSelected: React.PropTypes.bool,
  subject: React.PropTypes.object.isRequired
};

MoCover.defaultProps = {
  actions: {},
  isSelected: false
};
