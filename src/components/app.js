import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Container from 'muicss/lib/react/container';
import Panel from 'muicss/lib/react/panel';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Modal from './Modal';
import Singers from './Singers';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  render() {

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="My Favorite Singers"
            onLeftIconButtonTouchTap={() => console.log('Hamburger icon is clicked')}
            showMenuIconButton={false}
            iconElementRight={<FlatButton label="Add" onClick={this.showModal}/>}
          />
          <Container>
            <Modal isModalOpen={this.state.isModalOpen} close={this.closeModal}/>
            <br/>
            <Panel>
              <Singers />
            </Panel>
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }

  showModal() {
    this.setState({
      isModalOpen: true,
    });
    console.log('state changed due to opening modal: ', this.state.isModalOpen);
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
    console.log('state changed due to closing modal: ', this.state.isModalOpen);
  }
}
