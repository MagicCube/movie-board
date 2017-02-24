import React from 'react';

import LoLoMoRow from './LoLoMoRow';

import '../res/lolomo.less';

const TITLES = {
  inTheaters: '正在上映的电影',
  comingSoon: '即将上映的电影'
};

export default class LoLoMo extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      selectSubject: React.PropTypes.func.isRequired
    }).isRequired,
    models: React.PropTypes.shape({}).isRequired,
    selectedSubjectId: React.PropTypes.string,
    selectedRowKey: React.PropTypes.string
  }

  static defaultProps = {
    selectedSubjectId: null,
    selectedRowKey: null
  }

  render() {
    const rows = Object.keys(this.props.models).map((key) => {
      const model = this.props.models[key];
      const title = TITLES[key];
      const actions = {
        selectSubject: subject => this.props.actions.selectSubject({ subject, rowKey: key })
      };
      return (
        <LoLoMoRow
          key={key}
          actions={actions}
          defaultTitle={title}
          model={model}
          hasSelection={this.props.selectedRowKey === key}
          selectedSubjectId={this.props.selectedSubjectId}
        />
      );
    });
    return (
      <div className="mb-lolomo">
        {rows}
      </div>
    );
  }
}
