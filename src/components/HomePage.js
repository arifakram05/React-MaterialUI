import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddCircle from '@material-ui/icons/AddCircle';
import ListIcon from '@material-ui/icons/List';
import Panel from 'muicss/lib/react/panel';
import NewIdea from './NewIdea';
import IdeasList from '../containers/IdeasList';
import Divider from '@material-ui/core/Divider';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // Value of the selected tab. Managed by MaterialUI
      value: 0,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    // When a tab is selected, value is updated
    this.setState({ value });
  };

  render() {

    let mainContent;
    switch (this.state.value) {
      case 0:
        mainContent = <IdeasList />
        break;
      case 1:
        mainContent = <NewIdea />
        break;
      default:
      // nothing
    }

    return (
      <Paper style={{ marginTop: '50px' }}>
        <Panel>
          <div style={{ minHeight: '500px' }}>
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
            <Tab icon={<ListIcon />} />
            <Tab icon={<AddCircle />} />
          </Tabs>
        </Panel>
      </Paper>
    );
  }
}
