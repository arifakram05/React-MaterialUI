import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { someAction } from '../actions/action_groups';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ThumbsUpIcon from '@material-ui/icons/ThumbUp';
import ThumbsDownIcon from '@material-ui/icons/ThumbDown';

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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Avatar className={styles.ideaDetailsBackIcon} onClick={this.props.goBack}>
                        <ChevronLeftIcon />
                    </Avatar>
                    <div>
                        <ThumbsUpIcon style={{margin: '0 10', cursor: 'hand'}} onClick={() => { console.log('liked'); }} />
                        <ThumbsDownIcon style={{margin: '0 10', cursor: 'hand'}} onClick={() => { console.log('disliked'); }} />
                    </div>
                </div>
                <div>
                    {this.props.idea.idea}
                </div>
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
