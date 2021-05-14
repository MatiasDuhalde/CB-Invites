import React from 'react';
import { connect } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { showNotification } from '../actions';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const NotificationAlert = props => {
  const { showNotification } = props;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    showNotification(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={props.showing}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={props.type}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    showing: state.ui.showingNotification,
    message: state.ui.notificationMessage,
    type: state.ui.notificationType,
  };
};

export default connect(mapStateToProps, { showNotification })(
  NotificationAlert,
);
