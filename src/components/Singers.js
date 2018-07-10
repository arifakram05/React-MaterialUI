import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingers } from '../actions/loadSingers';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';
import SingerList from '../data/data.json';

class Singers extends Component {

  componentDidMount() {
    console.log('singers list - ', SingerList);
  }

  renderSingers() {
    if (this.props.singers) {
      return this.props.singers.map((singer) => {
        return (
          <ListItem
            leftAvatar={<Avatar src={singer.photo} />}
            rightIconButton={<DeleteIcon color={red500} onClick={() => console.log('Deleting Singer...')}/>}
            primaryText={singer.name}
            secondaryText={<p>{singer.description}</p>}
          />
        );
      });
    }
  }

  render() {
    return (
      <List>
        {this.renderSingers()}
        <Divider inset={true} />
      </List>
    );
  }
}

function mapStateToProps(state) {
  return {
    singers: state.singers
  };
}

function mapDispatchToProps(dispatch) {
  return loadSingers(SingerList);
  // return {
  //     dispatch(loadSingers(singerList));
  // }
  // return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Singers);
