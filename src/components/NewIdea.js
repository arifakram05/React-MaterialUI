import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from 'muicss/lib/react/container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import HighlightIcon from '@material-ui/icons/Highlight';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


class NewIdea extends Component {

  constructor(props) {
    super(props);
    // component state
    this.state = {
      formData: {
        postAnonymously: true,
        idea: '',
        description: ''
      },
      canBeSubmitted: false
    }
    // methods in this class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  // method that will be called after component is rendered
  componentDidMount() {

  }

  // method that will be called after component is updated
  componentDidUpdate() {

  }

  componentWillMount() {
    // custom rule will have name 'notEmpty'
    ValidatorForm.addValidationRule('notEmpty', (name, value) => {
        switch (name) {
          case 'idea':
            if (this.state.formData.idea.trim() === '') {
              return false;
            } else {
              return true;
            }
            break;
          case 'description':
            if (this.state.formData.description.trim() === '') {
              return false;
            } else {
              return true;
            }
            break;
          default:
            return true;
        }
    });
  }

  // one of the methods of this class
  handleChange(event) {
    const formData = this.state.formData;
    switch (event.target.name) {
      case 'postAnonymously':
        formData.postAnonymously = event.target.checked;
        break;
      case 'idea':
        formData.idea = event.target.value;
        break;
      case 'description':
        formData.description = event.target.value;
        break;
      default:
        // do nothing
    }
    this.setState({ formData });
  };

  handleSubmit(event) {
    Object.keys(this.state.formData).forEach(key => {
      if (key !== 'postAnonymously') {
        this.refs[key].validate(key, event.target.value);
      }
    });
    if (this.state.canBeSubmitted) {
      console.log('Data to be submitted is ', this.state.formData);
    }
  }

  handleBlur(event) {
    console.log('Blur triggered');
    // this.setState({ canBeSubmitted: true});
    this.refs[event.target.name].validate(event.target.name, event.target.value);
  }

  // render method - one of the lifecycle methods - necessary to override
  render() {

    const formStyles = {
      display: 'flex',
      flexWrap: 'wrap'
    }

    return (
      <React.Fragment>
        <AppBar position="static" >
          <Toolbar style={{backgroundColor:'#fff', height: '20px'}}>
            <List>
              <ListItem>
              <Avatar>
                <HighlightIcon color="secondary" />
              </Avatar>
              <ListItemText primary="Submit a new idea" />
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
        <Container style={{padding: '30px 50px 50px 50px', height: '100%'}}>
          <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
            <FormControl fullWidth required>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="postAnonymously"
                      name="postAnonymously"
                      checked={this.state.formData.postAnonymously}
                      onChange={this.handleChange}
                    />
                  }
                  label="Post Anonymously"
                />
                <TextValidator
                  id="new_idea_title"
                  name="idea"
                  ref="idea"
                  label="Idea"
                  fullWidth
                  required
                  multiline
                  margin="normal"
                  value={this.state.formData.idea}
                  onChange={this.handleChange}
                  validators={['notEmpty']}
                  errorMessages={['Please fill this out']}
                />
                <TextValidator
                  id="new_idea_description"
                  name="description"
                  ref="description"
                  label="Details"
                  fullWidth
                  required
                  multiline
                  rows="4"
                  margin="normal"
                  value={this.state.formData.description}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  validators={['notEmpty']}
                  errorMessages={['Please fill this out']}
                />
                <Button variant="outlined" color="primary" style={{'marginTop': "20px"}} onClick={this.handleSubmit}>
                  Submit
                  <Send />
                </Button>
              </FormGroup>
            </FormControl>
          </ValidatorForm>
        </Container>
      </React.Fragment>
    );
  }
}

export default NewIdea;
