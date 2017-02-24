import React from 'react';

import LoLoMoRow from './LoLoMoRow';

import '../res/lolomo.less';

export default class LoLoMo extends React.Component {
  static propTypes = {
    models: React.PropTypes.shape({}).isRequired
  }

  render() {
    const rows = Object.keys(this.props.models).map((key) => {
      const model = this.props.models[key];
      return <LoLoMoRow key={key} model={model} />;
    });
    return (
      <div className="mb-lolomo">
        { rows }
      </div>
    );
  }
}
