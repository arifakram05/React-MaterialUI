import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllIdeas } from '../actions/action_ideas';
import { fetchAllGroups } from '../actions/action_groups';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import Badge from '@material-ui/core/Badge';
import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsDownIcon from '@material-ui/icons/ThumbDown';
import styles from '../../style/style.css';

class IdeasList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIdea: {
        idea: '',
        description: ''
      },
      oldSelectedGroupId: '',
      activeGroup: '',
    };
  }

  componentWillMount() {
    this.props.fetchAllGroups();
  }

  componentDidUpdate() {

  }

  showSelectedGroup(group) {
    console.log('selected group: ', group);
    this.setState({ activeGroup: group });
    this.props.fetchAllIdeas(group);
  }

  styleSelectedGroup(selectedGroupId) {
    // clear the styling on previously selected group
    if (this.state.oldSelectedGroupId) {
      document.getElementById(this.state.oldSelectedGroupId).style.backgroundColor = '';
      document.getElementById(this.state.oldSelectedGroupId).style.WebkitBorderRadius = '';
    }
    // apply new styling on currently selected group
    document.getElementById(selectedGroupId).style.backgroundColor = '#fce8e6';
    document.getElementById(selectedGroupId).style.WebkitBorderRadius = '0 16px 16px 0';
    this.setState({ oldSelectedGroupId: selectedGroupId });
  }

  getIdeasList() {
    console.log("called getIdeasList - ", this.props.ideas);
    console.log("selected idea - ", this.state.activeGroup);
    if (this.props.ideas && this.props.ideas.length > 0) {
      return this.props.ideas.map(idea => {
        return (
          <React.Fragment key={idea.id}>
            <ListItem id={idea.id} key={idea.id} button divider>
              <ListItemText primary={`${idea.idea}`} secondary={`${idea.description}`} />
              <ListItemSecondaryAction>
                <Badge badgeContent={idea.likes} color="primary" classes={{ badge: styles.likesDislikesBadge, root: styles.likesDislikesIcon }}>
                  <ThumbsUpIcon />
                </Badge>
                <Badge badgeContent={idea.dislikes} color="secondary" classes={{ badge: styles.likesDislikesBadge, root: styles.likesDislikesIcon }}>
                  <ThumbsDownIcon />
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
            style={{ height: '32px' }}
            onClick={() => { this.styleSelectedGroup(group); this.showSelectedGroup(group) }}>
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
            {this.getIdeasList()}
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
