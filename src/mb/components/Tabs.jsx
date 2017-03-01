import React from 'react';

import '../res/tabs.less';


export default class Tabs extends React.Component {
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
    const tabNavItems = React.Children.map(children, tab => (
      <li
        key={tab.props.id}
        className={tab.props.id === selectedTabId ? 'selected' : null}
        onClick={() => { if (tab.props.id !== selectedTabId) this.setState({ selectedTabId: tab.props.id }); }}
      >
        <a className="h3" role="button">{tab.props.title}</a>
      </li>
    ));
    return (
      <div className="mb-tabs">
        {React.Children.map(children, tab => <div className={selectedTabId === tab.props.id ? 'tab-body selected' : 'tab-body'}>{tab}</div>)}
        <nav className="tab-nav">
          <ul>
            {tabNavItems}
          </ul>
        </nav>
      </div>
    );
  }
}
