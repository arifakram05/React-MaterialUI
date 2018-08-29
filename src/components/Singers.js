import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { red500 } from 'material-ui/styles/colors';
import { fetchUsers } from '../actions/action_users'

class Singers extends Component {

  constructor(props) {
    super(props);

    this.process = this.process.bind(this);
  }

  componentDidUpdate() {
    if (this.props.status) {
      console.log('User Status: ', this.props.status);
    }
    if (this.props.userDetails) {
      console.log('obtained user details are - ', this.props.userDetails);
    }
  }

  process() {
    console.log('clicked on process');
  }

  render() {
    return (
      <List>
        <ListItem
          leftAvatar={<Avatar src="https://i.pinimg.com/736x/c5/59/67/c5596766934f914bcd2a19e3e934bc3a--taylor-swift-taylors.jpg" />}
          rightIconButton={<DeleteIcon color={red500} onClick={() => console.log('Deleting Singer...')} />}
          primaryText="Taylor Swift"
          secondaryText={
            <p>{`Taylor Swift's middle name is Alison`}</p>
          }
          onClick={() => this.props.fetchUsers(1)}
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/642109714537451524/vcvCa6bj.jpg" />}
          rightIconButton={<DeleteIcon color={red500} />}
          primaryText="Katy Perry"
          secondaryText={
            <p>{`Katy Perry's full name is Katheryn Elizabeth Hudson`}</p>
          }
          onClick={this.process}
        />
        <Divider inset={true} />
      </List>
    );
  }

}

function mapStateToProps(state) {
  return {
    status: state.users.status,
    userDetails: state.users.userDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers);
