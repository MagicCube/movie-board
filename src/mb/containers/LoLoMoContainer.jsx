import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import React from 'react';

import JawBone from '../components/JawBone';
import lolomoActionCreators from '../actions/lolomo-action-creators';
import LoLoMoRow from '../components/LoLoMoRow';

import LoMoCoversContainer from './LoMoCoversContainer';
import MoJumbotronContainer from './MoJumbotronContainer';

import '../res/lolomo.less';

const TITLES = {
  inTheaters: '正在上映的电影',
  comingSoon: '即将上映的电影',
  top20: '豆瓣电影Top20'
};


@connect(
  state => ({
    selectedModelKey: state.getIn(['lolomo', 'selectedModelKey'])
  }),
  dispatch => ({
    actions: bindActionCreators(lolomoActionCreators, dispatch)
  })
)
/**
 * The famous design awarded "List Of List of Movie" container.
 */
export default class LoLoMoContainer extends React.PureComponent {
  static propTypes = {
    actions: React.PropTypes.shape({
      selectSubject: React.PropTypes.func.isRequired
    }).isRequired,
    models: React.PropTypes.objectOf(Immutable.Map).isRequired,
    selectedModelKey: React.PropTypes.string
  }

  static defaultProps = {
    selectedModelKey: null
  }

  render() {
    const { actions: { selectSubject }, models, selectedModelKey } = this.props;

    const rows = models.map((model, key) => {
      const title = TITLES[key];
      const hasSelection = selectedModelKey === key;

      let jawBone = null;
      jawBone = hasSelection ? (
        <JawBone actions={{ close: () => selectSubject(null) }}>
          <MoJumbotronContainer />
        </JawBone>) : null;

      return (
        <LoLoMoRow
          key={key}
          modelKey={key}
          title={title}
          hasSelection={hasSelection}
          jawBone={jawBone}
        >
          <LoMoCoversContainer
            modelKey={key}
          />
        </LoLoMoRow>
      );
    }).toArray();

    return (
      <div className="mb-lolomo">
        {rows}
      </div>
    );
  }
}
