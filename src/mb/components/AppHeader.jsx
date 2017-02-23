import React from 'react';

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translucent: false
    };
  }

  componentDidMount() {
    $(window).on('scroll', () => {
      this.setState({
        translucent: document.body.scrollTop > 5
      });
    });
  }

  render() {
    return (
      <header className={`mb-app-header${this.state.translucent ? ' translucent' : ''}`}>
        <div className="mb-logo" />
      </header>
    );
  }
}
