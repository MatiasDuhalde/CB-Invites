import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import logo from '../assets/logo.svg';

const styles = theme => ({
  logoImg: {
    marginTop: '10px',
  },
  title: {
    textAlign: 'center',
  },
  gridStyle: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  titleContainer: {
    flexGrow: 1,
  },
});

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Grid container className={classes.gridStyle} spacing={2}>
              <Grid item>
                <img className={classes.logoImg} src={logo} alt="logo" />
              </Grid>
              <Grid item className={classes.titleContainer}>
                <Typography className={classes.title} variant="h4">
                  App de Invitaciones
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Navbar);
