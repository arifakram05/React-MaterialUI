import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import {red500} from 'material-ui/styles/colors';

const Singers = () => {
    return (
      <List>
        <ListItem
          leftAvatar={<Avatar src="https://i.pinimg.com/736x/c5/59/67/c5596766934f914bcd2a19e3e934bc3a--taylor-swift-taylors.jpg" />}
          rightIconButton={<DeleteIcon color={red500} onClick={() => console.log('Deleting Singer...')}/>}
          primaryText="Taylor Swift"
          secondaryText={
            <p>{`Taylor Swift's middle name is Alison`}</p>
          }
        />
        <Divider inset={true} />
        <ListItem
          leftAvatar={<Avatar src="https://pbs.twimg.com/profile_images/642109714537451524/vcvCa6bj.jpg" />}
          rightIconButton={<DeleteIcon color={red500} />}
          primaryText="Katy Perry"
          secondaryText={
            <p>{`Katy Perry's full name is Katheryn Elizabeth Hudson`}</p>
          }
        />
        <Divider inset={true} />
      </List>
    );
}

export default Singers;
