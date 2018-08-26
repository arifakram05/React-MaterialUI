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
import Select from 'react-select';
import styles from '../../style/style.css';

class NewIdea extends Component {

  constructor(props) {
    super(props);
    // component state
    this.state = {
      formData: {
        postAnonymously: true,
        idea: '',
        description: '',
        groups: ''
      }
    }
    // methods in this class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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

  handleSelectChange(value) {
    document.getElementsByClassName("Select-control")[0].style.borderColor = "";
    const formData = this.state.formData;
    formData.groups = value;
    this.setState({ formData });
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
      if (key !== 'postAnonymously' && key !== 'groups') {
        this.refs[key].validate(key, event.target.value);
      }
    });
    if (this.state.formData.groups !== '' && this.state.formData.idea !== '' && this.state.formData.description !== '') {
      console.log('Data to be submitted is ', this.state.formData);
    } else if (this.state.formData.groups === '') {
      document.getElementsByClassName("Select-control")[0].style.borderColor = "#f44336";
    }
  }

  handleBlur(event) {
    this.refs[event.target.name].validate(event.target.name, event.target.value);
  }

  // render method - one of the lifecycle methods - necessary to override
  render() {

    const formStyles = {
      display: 'flex',
      flexWrap: 'wrap'
    }

    const groups = [
      { value: 'Compass Dev', label: 'Compass Dev' },
      { value: 'Infection Control', label: 'Infection Control' },
      { value: 'Rehab Dev', label: 'Rehab Dev' },
    ];

    return (
      <React.Fragment>
        <AppBar position="static" >
          <Toolbar style={{ backgroundColor: '#2196f3', height: '20px' }}>
            <List>
              <ListItem>
                <Avatar>
                  <HighlightIcon color="secondary" />
                </Avatar>
                <span style={{ marginLeft: '15px', color: '#fff', fontSize: 'large' }}>Submit a new idea</span>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
        <Container style={{ padding: '30px 50px 50px 50px', height: '100%' }}>
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
                  style={{ 'marginBottom': '16px' }}
                />
                <Select
                  name="groups"
                  ref="groups"
                  id="groups"
                  closeOnSelect={false}
                  multi
                  onChange={this.handleSelectChange}
                  placeholder="Select group(s)"
                  removeSelected
                  rtl={false}
                  simpleValue
                  required
                  options={groups}
                  value={this.state.formData.groups}
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
                  errorMessages={['']}
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
                  errorMessages={['']}
                />
                <Button variant="outlined" color="primary" className={styles.topMargin30} onClick={this.handleSubmit}>
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
