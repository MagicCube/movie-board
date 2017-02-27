import React from 'react';

import '../res/jaw-bone.less';


/**
 * The JawBone component is a pure container which can be opened up when user select an item in LoLoMo.
 * As a container, it allows to add a element as its single child.
 */
export default function JawBone({ children }) {
  return (
    <div className="mb-jaw-bone">
      <div className="content">
        {children}
      </div>
      <a className="close-button" role="button"><i className="octicon icon-x h2" /></a>
    </div>
  );
}


JawBone.propTypes = {
  children: React.PropTypes.element.isRequired
};
