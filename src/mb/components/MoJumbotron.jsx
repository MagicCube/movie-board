import Immutable from 'immutable';
import React from 'react';

import LoCasts from './LoCasts';
import LoComments from './LoComments';
import LoTrailers from './LoTrailers';
import MoGeneral from './MoGeneral';
import MoSlides from './MoSlides';
import MoTab from './MoTab';
import MoTabs from './MoTabs';

import '../res/mo-jumbotron.less';

/**
 * The jumbotron component to show movie details.
 * It can be included in a JawBone container inside a LoLoMo.
 */
export default class MoJumbotron extends React.Component {
  static propTypes = {
    subject: React.PropTypes.objectOf(Immutable.Map)
  }

  static defaultProps = {
    subject: null
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.subject === null && this.props.subject !== null) ||
      !nextProps.subject.equals(this.props.subject)
  }

  render() {
    const { subject } = this.props;
    if (subject === null) return null;
    const {
      id,
      title
    } = subject.toJS();
    return (
      <div className="mb-mo-jumbotron" data-subject-id={id}>
        <div className="jumbotron-content">
          <h1 className="subject-title"><span className="title">{title}</span></h1>
          <MoTabs>
            <MoTab id="general" title="总览">
              <MoGeneral subject={subject} />
            </MoTab>
            <MoTab id="casts" title="演员">
              <LoCasts casts={subject.get('casts')} />
            </MoTab>
            <MoTab id="trailers" title="预告片">
              <LoTrailers trailers={subject.get('trailers')} />
            </MoTab>
            <MoTab id="comments" title="评论">
              <LoComments comments={subject.get('popular_comments')} />
            </MoTab>
          </MoTabs>
        </div>
        <MoSlides slides={subject.get('trailers') && subject.get('trailers').size ? subject.get('trailers') : subject.get('photos')} />
      </div>
    );
  }
}
