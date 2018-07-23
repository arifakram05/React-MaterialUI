import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllIdeas } from '../actions/action_ideas';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';

class IdeasList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedIdea: {
        idea: '',
        description: ''
      },
      oldSelectedGroupId: '',
    };
  }

  componentWillMount() {
    this.props.fetchAllIdeas();
  }

  componentDidUpdate() {

  }

  showSelectedGroup(selectedIdea) {
    console.log('selected idea: ', selectedIdea);
    this.setState({ selectedIdea });
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
    return this.props.ideas.map(idea => {
      return (
        <React.Fragment key={idea.id}>
            <ListItem id={idea.id}
                      key={idea.id} dense button
                      style={{height: '32px'}}
                      onClick={() => {this.showSelectedGroup(idea); this.styleSelectedGroup(idea.id)}}>
              <ListItemText primary={`${idea.group}`} style={{color: '#d93025'}}/>
            </ListItem>
        </React.Fragment>
      );
    });
  }

  render() {

    return (
      <List>
        <div style={{'display': 'flex', 'flexWrap': 'wrap'}}>
          <div style={{'flex': '0 0 20%', 'whiteSpace': 'nowrap', 'overflow': 'hidden', 'textOverflow': 'ellipsis'}}>
            {this.getIdeasList()}
          </div>
          <div style={{'flex': '0 0 2%'}} >
          </div>
          <div style={{'flex': '0 0 78%'}}>
            {this.state.selectedIdea.idea}
          </div>
        </div>
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    ideas: state.ideas, // the name after 'state.' is the key in the redux object, it is mentioned in index.js of reducers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllIdeas }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeasList);
