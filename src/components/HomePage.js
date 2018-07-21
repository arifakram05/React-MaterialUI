import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddCircle from '@material-ui/icons/AddCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Panel from 'muicss/lib/react/panel';
import NewIdea from './NewIdea';
import SubmitNewIdea from './SubmitNewIdea';
import SubmitNewIdea3 from './SubmitNewIdea3';

export default class HomePage extends React.Component {

  state = {
    // Value of the selected tab. Managed by MaterialUI
    value: 0,
  };

  handleChange = (event, value) => {
    // When a tab is selected, value is updated
    this.setState({ value });
  };

  render() {

    let mainContent;
    switch (this.state.value) {
      case 0:
        mainContent = <NewIdea />
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
        <Panel style={{height:'72vh'}}>
          {mainContent}
        </Panel>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="primary"
          textColor="primary"
          centered >
          <Tab icon={<AddCircle color="primary" />} />
          <Tab icon={<FavoriteIcon color="secondary" />} />
          <Tab icon={<PersonPinIcon color="error" />} />
        </Tabs>
      </Paper>
    );
  }
}
