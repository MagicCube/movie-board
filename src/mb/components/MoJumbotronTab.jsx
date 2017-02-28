import React from 'react';

export default class MoJumbotronTab extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.arrayOf(React.PropTypes.element)])
  }

  static defaultProps = {
    children: []
  }

  render() {
    const { id, children } = this.props;
    return (
      <div id={id} className="mb-mo-jumbotron-tab">
        {children}
      </div>
    );
  }
}
