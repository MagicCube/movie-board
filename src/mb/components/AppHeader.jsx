
import cn from 'classnames';
import React from 'react';

export default class AppHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      translucent: false
    };
  }

  componentDidMount() {
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
    const className = cn('mb-app-header', { translucent: this.state.translucent });
    return (
      <header className={className}>
        <div className="mb-logo" />
      </header>
    );
  }
}
