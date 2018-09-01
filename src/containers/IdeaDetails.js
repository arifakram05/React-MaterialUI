import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Avatar from '@material-ui/core/Avatar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsDownIcon from '@material-ui/icons/ThumbDown';
import Panel from 'muicss/lib/react/panel';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from '../../style/style.css';

class IdeaDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {

            },
        }
    }

    render() {

        return (
            <React.Fragment>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <Avatar className={styles.ideaDetailsBackIcon} onClick={this.props.goBack}>
                        <ChevronLeftIcon />
                    </Avatar>
                    <div>
                        <ThumbsUpIcon style={{ margin: '0 10', cursor: 'hand' }} onClick={() => { console.log('liked'); }} />
                        <ThumbsDownIcon style={{ margin: '0 10', cursor: 'hand' }} onClick={() => { console.log('disliked'); }} />
                    </div>
                </div>
                <Panel style={{ 'marginTop': '25px' }}>
                    <Typography variant="headline" color="primary" gutterBottom classes={{ root: styles.capitalize }}>
                        {this.props.idea.idea}
                    </Typography>
                    <Typography style={{ margin: '25px 0 25px 0' }} variant="subheading" gutterBottom>
                        {this.props.idea.description}
                    </Typography>
                    <Divider />
                    <Typography color="secondary" style={{ 'marginTop': '20px' }} gutterBottom>
                        Comments
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="Comment1 is something and something" secondary="08-31-2018 10:22 AM" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Comment2 is something else. What is your favorite processor?" secondary="09-01-2018 12:12 PM" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Comment1 is something and something" secondary="08-31-2018 10:22 AM" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Comment2 is something else. What is your favorite processor?" secondary="09-01-2018 12:12 PM" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Comment1 is something and something" secondary="08-31-2018 10:22 AM" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Comment2 is something else. What is your favorite processor?" secondary="09-01-2018 12:12 PM" />
                        </ListItem>
                    </List>
                </Panel>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaDetails);
