import React from 'react';

import LoLoMoRow from './LoLoMoRow';

import '../res/lolomo.less';

const TITLES = {
  inTheaters: '正在上映的电影',
  comingSoon: '即将上映的电影'
};

export default class LoLoMo extends React.Component {
  static propTypes = {
    models: React.PropTypes.shape({}).isRequired
  }

  render() {
    const rows = Object.keys(this.props.models).map((key) => {
      const model = this.props.models[key];
      const title = TITLES[key];
      return <LoLoMoRow key={key} defaultTitle={title} model={model} />;
    });
    return (
      <div className="mb-lolomo">
        { rows }
      </div>
    );
  }
}
