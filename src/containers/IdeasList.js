import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllIdeas } from '../actions/action_ideas';
import { fetchAllGroups } from '../actions/action_groups';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsDownIcon from '@material-ui/icons/ThumbDown';
import IdeaDetails from './IdeaDetails';

import styles from '../../style/style.css';

class IdeasList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIdea: {
        idea: '',
        description: ''
      },
      activeGroup: '',
      showFullIdeaDetails: false,
      activeIdea: {

      }
    };

    this.hideFullIdeaDetails = this.hideFullIdeaDetails.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllGroups();
  }

  componentDidMount() {
    console.log('Groups is ', this.props.groups);
    this.props.fetchAllIdeas('My Inbox');
    this.setState({ activeGroup: 'My Inbox' });
  }

  showSelectedGroup(group) {
    console.log('selected group: ', group);
    // set the selected group as active and hide full details about an idea
    this.setState({ activeGroup: group, showFullIdeaDetails: false });
    this.props.fetchAllIdeas(group);
  }

  showFullIdeaDetails(idea) {
    console.log('Entire idea details ', idea);
    this.setState({ showFullIdeaDetails: true, activeIdea: idea });
  }

  hideFullIdeaDetails() {
    console.log('showing all ideas');
    this.setState({ showFullIdeaDetails: false, activeIdea: {} });
  }

  getIdeasList() {
    console.log("called getIdeasList - ", this.props.ideas);
    console.log("selected idea - ", this.state.activeGroup);

    if (this.props.ideas && this.props.ideas.length > 0) {
      return this.props.ideas.map(idea => {
        return (
          <React.Fragment key={idea.id}>
            <ListItem id={idea.id} key={idea.id} button divider onClick={() => { this.showFullIdeaDetails(idea) }}>
              <ListItemText primary={`${idea.idea}`} secondary={`${idea.description}`} classes={{ secondary: styles.ideasListSecondaryText }} />
              <ListItemSecondaryAction>
                <Badge badgeContent={idea.likes} color="primary" classes={{ badge: styles.badge, root: styles.icon }}>
                  <ThumbsUpIcon />
                </Badge>
                <Badge badgeContent={idea.dislikes} color="secondary" classes={{ badge: styles.badge, root: styles.icon }}>
                  <ThumbsDownIcon />
                </Badge>
                <Badge badgeContent={idea.comments} color="error" classes={{ badge: styles.badge, root: styles.icon }}>
                  <CommentIcon />
                </Badge>
              </ListItemSecondaryAction>
            </ListItem>
          </React.Fragment>
        );
      });
    } else if (this.state.activeGroup) {
      return (
        <div>
          No data to show.
        </div>
      );
    }
  }

  getGroupsList() {
    return this.props.groups.map(group => {
      return (
        <React.Fragment key={group}>
          <ListItem id={group}
            key={group} dense button
            style={{ backgroundColor: this.state.activeGroup === group ? 'pink' : 'white', height: '32px',  WebkitBorderRadius: '0 16px 16px 0'}}
            onClick={() => { this.showSelectedGroup(group) }}>
            <ListItemText primary={`${group}`} />
          </ListItem>
        </React.Fragment>
      );
    });
  }

  render() {

    return (
      <List>
        <div style={{ 'display': 'flex', 'flexWrap': 'wrap' }}>
          <div style={{ 'flex': '0 0 20%', 'whiteSpace': 'nowrap', 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}>
            <ListSubheader style={{ 'whiteSpace': 'nowrap', 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}>Groups</ListSubheader>
            {this.getGroupsList()}
          </div>

          <div style={{ 'flex': '0 0 2%' }} >
          </div>

          <div style={{ 'flex': '0 0 78%' }}>
            {/* conditional rendering inside of return method i.e. inline rendering */}
            {this.state.showFullIdeaDetails ? <IdeaDetails goBack={this.hideFullIdeaDetails} idea={this.state.activeIdea} /> : this.getIdeasList()}
          </div>
        </div>
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    ideas: state.ideas, // the name after 'state.' is the key in the redux object, it is mentioned in index.js of reducers
    groups: state.groups,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllIdeas, fetchAllGroups }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeasList);
