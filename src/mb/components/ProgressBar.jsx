import cs from 'classnames';
import React from 'react';

import '../res/progress-bar.less';

/**
 * The placebo progress bar component.
 */
export default class MoSlides extends React.Component {
  static propTypes = {
    isLoading: React.PropTypes.bool
  }

  static defaultProps = {
    isLoading: false
  }

  constructor(props) {
    super(props);
    this.state = { percentage: 0 };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.isLoading !== this.props.isLoading) {
      this.clearTimer();
      if (nextProps.isLoading) {
        this.setState({
          percentage: 15
        });
        this.timer = setInterval(() => {
          this.setState((prevState) => {
            let percentage = prevState.percentage;
            if (percentage >= 98) {
              percentage = 98;
            } else if (percentage >= 90) {
              percentage += 1;
            } else {
              percentage += 15;
            }
            return { percentage };
          });
        }, 500);
      } else {
        this.setState({
          percentage: 100
        });
      }
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    return (
      <div
        className={cs("mb-progress-bar", { loading: this.props.isLoading })}
      >
        <div className="percentage" style={{ width: `${this.state.percentage}%` }} />
      </div>
    );
  }
}
