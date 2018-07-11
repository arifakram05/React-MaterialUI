import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Panel from 'muicss/lib/react/panel';
import SimpleList from './SimpleList';
import SubmitNewIdea from './SubmitNewIdea';
import SubmitNewIdea3 from './SubmitNewIdea3';

export default class IconTabs extends React.Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    console.log('Number of the tab clicked is ', value);
    this.setState({ value });
  };

  render() {

    let mainContent;
    switch (this.state.value) {
      case 0:
        mainContent = <SimpleList />
        break;
      case 1:
        mainContent = <SubmitNewIdea />
        break;
      case 2:
        mainContent = <SubmitNewIdea3 />
        break;
      default:
        // nothing
    }

    return (
      <Paper style={{marginTop:'50px'}}>

        <Panel style={{height:500}}>
          {mainContent}
        </Panel>

        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="primary"
          textColor="primary"
          centered >
          <Tab icon={<PhoneIcon />} />
          <Tab icon={<FavoriteIcon />} />
          <Tab icon={<PersonPinIcon />} />
        </Tabs>
      </Paper>
    );
  }
}
