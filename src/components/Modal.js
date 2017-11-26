import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//class Modal extends Component {
const Modal = props => {

  // constructor(props) {
  //   super(props);
  //   this.closeModal = this.closeModal.bind(this);
  //   this.addSinger = this.addSinger.bind(this);
  // }

  // render() {

  // closeModal() {
  const closeModal = () => {
    props.close();
  }

  // addSinger() {
  const addSinger = () => {
    //console.log('Singer details - ', this.refs.name.getValue(), this.refs.photo.getValue(), this.refs.description.getValue());
    closeModal();
  }

    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={closeModal}
      />,
      <FlatButton
        label="Add"
        primary={true}
        onClick={addSinger}
      />,
    ];

    return(
      <Dialog
        title='Add a Singer'
        actions={actions}
        modal={false}
        open={props.isModalOpen}
        onRequestClose={closeModal}
      >
      <TextField
        floatingLabelText="Singer Name"
        fullWidth={true}
        //ref='name'
      />
      <br/>
      <TextField
        floatingLabelText="Singer Photo"
        fullWidth={true}
        //ref='photo'
      />
      <br/>
      <TextField
        floatingLabelText="Singer Description"
        multiLine={true}
        rows={1}
        rowsMax={2}
        fullWidth={true}
        //ref='description'
      />
      </Dialog>
    );
  //}


}

export default Modal;
