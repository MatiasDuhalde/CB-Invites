import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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

import { fetchRanking } from '../actions';

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
  const { fetchRanking } = props;

  useEffect(() => {
    fetchRanking();
  }, [fetchRanking]);

  const renderList = () => {
    return props.ranking.map(rankingItem => {
      return (
        <TableRow key={rankingItem.id}>
          <TableCell>{rankingItem.fullName}</TableCell>
          <TableCell>{rankingItem.usersInvited}</TableCell>
          <TableCell>${rankingItem.amount}</TableCell>
        </TableRow>
      );
    });
  };

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
            <TableBody>{renderList()}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    ranking: state.invites.ranking,
  };
};

export default connect(mapStateToProps, { fetchRanking })(InviteForm);
