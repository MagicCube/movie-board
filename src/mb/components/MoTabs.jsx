import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../res/mo-tabs.less';


export default class MoTabs extends React.Component {
  static propTypes = {
    actions: React.PropTypes.shape({
      selectTab: React.PropTypes.func.isRequired
    }).isRequired,
    children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.arrayOf(React.PropTypes.element)]),
    selectedTabId: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    selectedTabId: 'general',
    children: []
  }

  render() {
    const { actions: { selectTab }, selectedTabId, children } = this.props;
    let selectedTab = null;
    React.Children.forEach(children, (child) => {
      if (child.props.id === selectedTabId) {
        selectedTab = child;
      }
    });
    const tabNavItems = React.Children.map(children, tab => (
      <li
        key={tab.props.id}
        className={tab === selectedTab ? 'selected' : null}
        onClick={() => { if (tab.props.id !== selectedTabId) selectTab(tab.props.id); }}
      >
        <a className="h3" role="button">{tab.props.title}</a>
      </li>
    ));
    return (
      <div className="mb-mo-tabs">
        <div className="tab-body">
          <ReactCSSTransitionGroup
            transitionName="tab-transition"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {selectedTab}
          </ReactCSSTransitionGroup>
        </div>
        <nav className="tab-nav">
          <ul>
            {tabNavItems}
          </ul>
        </nav>
      </div>
    );
  }
}
