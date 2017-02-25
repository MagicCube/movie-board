import cn from 'classnames';
import React from 'react';

import '../res/app-header.less';

export default class AppHeader extends React.PureComponent {
  static propTypes = {
    navbars: React.PropTypes.array
  }

  static defaultProps = {
    navbars: []
  }

  constructor(props) {
    super(props);
    this.state = {
      translucent: false
    };
  }

  componentDidMount() {
    // TODO: Remove scroll listener when componentDidUnmount if necessary.
    $(window).on('scroll', () => {
      const translucent = document.body.scrollTop > 5;
      if (this.state.translucent !== translucent) {
        this.setState({
          translucent
        });
      }
    });
  }

  render() {
    return (
      <header className={cn('mb-app-header', { translucent: this.state.translucent })}>
        <div className="mb-logo" />
        <div className="navbars">
          {this.props.navbars}
        </div>
      </header>
    );
  }
}
