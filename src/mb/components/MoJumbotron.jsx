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
    actions: React.PropTypes.object.isRequired,
    selectedTabId: React.PropTypes.string.isRequired,
    subject: React.PropTypes.objectOf(Immutable.Map).isRequired
  }

  shouldComponentUpdate(nextProps) {
    return !nextProps.subject.equals(this.props.subject) || nextProps.selectedTabId !== this.props.selectedTabId;
  }

  render() {
    const { actions, selectedTabId, subject } = this.props;
    const {
      id,
      title
    } = subject.toJS();
    return (
      <div className="mb-mo-jumbotron" data-subject-id={id}>
        <div className="jumbotron-content">
          <h1 className="subject-title"><span className="title">{title}</span></h1>
          <MoTabs actions={actions} selectedTabId={selectedTabId}>
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
