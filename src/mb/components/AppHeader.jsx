import cn from 'classnames';
import React from 'react';

import '../res/app-header.less';


/**
 * Header component of application, including banner and placeholder for navigation bars.
 */
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
    $(document).on('scroll', () => {
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
        <div className="mb-logo" onClick={this.handleClick} />
        <div className="navbars">
          {this.props.navbars}
        </div>
      </header>
    );
  }

  handleClick = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log(this);
  }
}
