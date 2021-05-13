import { Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    boxSizing: 'border-box',
    background: theme.palette.secondary.main,
    borderRadius: '30px',
    color: theme.palette.primary.main,
    minHeight: 48,
    padding: '0 30px',
    boxShadow: theme.shadows[6],
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },
  label: {
    textTransform: 'capitalize',
  },
});

const CustomButton = withStyles(styles)(Button);

export default CustomButton;
