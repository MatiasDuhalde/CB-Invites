import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import logo from '../assets/logo.svg';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  logoImg: {
    marginTop: theme.spacing(1),
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
}));

const Navbar = props => {
  const classes = useStyles();

  const location = useLocation();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container className={classes.gridStyle} spacing={2}>
            <Grid item>
              <RouterLink to="/">
                <img className={classes.logoImg} src={logo} alt="logo" />
              </RouterLink>
            </Grid>
            <Grid item className={classes.titleContainer}>
              <Typography className={classes.title} variant="h4">
                App de Invitaciones
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                visibility: location.pathname !== '/' ? 'visible' : 'hidden',
              }}
            >
              <CustomButton to="/" component={RouterLink}>
                <Typography variant="h6">Volver</Typography>
              </CustomButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
