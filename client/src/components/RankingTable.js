import React from 'react';
import {
  makeStyles,
  Typography,
  Container,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  tableBase: {
    padding: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1),
  },
}));

const InviteForm = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" className={classes.title}>
        Ranking
      </Typography>
      <Paper className={classes.formBase}>
        <TableContainer className={classes.tableBase} component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Invitaciones</TableCell>
                <TableCell>Monto ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default InviteForm;
