import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../res/mo-tabs.less';


export default class MoTabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.arrayOf(React.PropTypes.element)])
  }

  static defaultProps = {
    children: []
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedTabId: 'general'
    };
  }

  render() {
    const { children } = this.props;
    const { selectedTabId } = this.state;
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
        onClick={() => { if (tab.props.id !== selectedTabId) this.setState({ selectedTabId: tab.props.id }); }}
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
