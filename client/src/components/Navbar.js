import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import logo from '../assets/logo.svg';

const styles = theme => ({
  logoImg: {
    padding: '0 8px',
  },
});

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed">
        <Toolbar>
          <img className={classes.logoImg} src={logo} alt="logo" />
          <Typography variant="h4">CurrencyBird</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Navbar);
