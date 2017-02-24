import React from 'react';

export default function LoLoMoRowHead(props) {
  return (
    <div className="mb-lolomo-row-head">
      <a className="title" href="javascript:void(0)">{props.title ? props.title : props.defaultTitle}</a>
    </div>
  );
}

LoLoMoRowHead.propTypes = {
  defaultTitle: React.PropTypes.string.isRequired,
  title: React.PropTypes.string
};
