import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddCircle from '@material-ui/icons/AddCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Panel from 'muicss/lib/react/panel';
import NewIdea from './NewIdea';
import SubmitNewIdea3 from './SubmitNewIdea3';
import IdeasList from '../containers/IdeasList';
import Divider from '@material-ui/core/Divider';

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
        mainContent = <IdeasList />
        break;
      case 2:
        mainContent = <SubmitNewIdea3 />
        break;
      default:
      // nothing
    }

    return (
      <Paper style={{ marginTop: '50px' }}>
        <Panel>
          <div style={{ height: '500px' }}>
            {mainContent}
          </div>
          <Divider />
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="primary"
            centered >
            <Tab icon={<AddCircle />} />
            <Tab icon={<FavoriteIcon />} />
            <Tab icon={<PersonPinIcon />} />
          </Tabs>
        </Panel>
      </Paper>
    );
  }
}
