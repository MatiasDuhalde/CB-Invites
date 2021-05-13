import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import CustomButton from './CustomButton';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(3),
  },
  gridContainerStyle: {
    flexDirection: 'row',
    alignContents: 'center',
    alignItems: 'center',
    JustifyContent: 'flex-end',
    rowGap: theme.spacing(6),
  },
  gridItemStyle: {
    display: 'flex',
    'align-content': 'center',
    'align-items': 'center',
    'justify-content': 'left',
  },
});

class Homepage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <Grid container spacing={2} className={classes.gridContainerStyle}>
          <Grid item className={classes.gridItemStyle} xs={8}>
            <Typography variant="h3" color="initial">
              Generar una invitación
            </Typography>
          </Grid>
          <Grid item className={classes.gridItemStyle} xs={4}>
            <CustomButton fullWidth to="/invitation" component={RouterLink}>
              <Typography variant="h4">Generar</Typography>
            </CustomButton>
          </Grid>
          <Grid item className={classes.gridItemStyle} xs={4}>
            <CustomButton fullWidth to="/register" component={RouterLink}>
              <Typography variant="h4">Registrarse</Typography>
            </CustomButton>
          </Grid>
          <Grid
            item
            className={classes.gridItemStyle}
            xs={8}
            style={{ justifyContent: 'center' }}
          >
            <Typography variant="h3" color="initial">
              Registrarse
            </Typography>
          </Grid>
          <Grid item className={classes.gridItemStyle} xs={8}>
            <Typography variant="h3" color="initial">
              Ver ranking
            </Typography>
          </Grid>
          <Grid item className={classes.gridItemStyle} xs={4}>
            <CustomButton fullWidth to="/ranking" component={RouterLink}>
              <Typography variant="h4">Ranking</Typography>
            </CustomButton>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Homepage);
