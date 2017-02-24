import React from 'react';
import cs from 'classnames';

export default function Cover(props) {
  const {
    subject,
    isSelected,
    actions: {
      selectSubject
    }
  } = props;
  return (
    <a className={cs('mb-cover', { isSelected })} onClick={typeof selectSubject === 'function' ? () => selectSubject(subject) : null}>
      <div className="cover-image" style={{ backgroundImage: `url(${subject.images.large})` }} />
    </a>
  );
}

Cover.propTypes = {
  subject: React.PropTypes.object.isRequired,
  isSelected: React.PropTypes.bool,
  actions: React.PropTypes.shape({
    selectSubject: React.PropTypes.func
  }).isRequired
};

Cover.defaultProps = {
  actions: {}
};
