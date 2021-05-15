import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import {
  makeStyles,
  Typography,
  Grid,
  Container,
  Paper,
  TextField,
} from '@material-ui/core';

import CustomButton from './CustomButton';
import { createInviteLink } from '../actions';

const useStyles = makeStyles(theme => ({
  formBase: {
    padding: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1),
  },
  linkContainer: {
    marginTop: theme.spacing(2),
  },
  gridItem: {
    textAlign: 'center',
  },
}));

const InviteForm = props => {
  const { createdInvite } = props;
  const { createInviteLink } = props;

  const classes = useStyles();

  const defaultValues = {
    fullName: '',
    email: '',
  };

  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = data => {
    createInviteLink(data);
  };

  const renderInviteLink = () => {
    if (createdInvite) {
      return (
        <Grid container spacing={3} className={classes.linkContainer}>
          <Grid item xs={12} className={classes.gridItem}>
            <Typography variant="h6">
              ¡Comparte este link con alguien más para obtener tu recompensa!
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Typography variant="overline">
              {`${window.location.origin.toString()}/register/${
                createdInvite.code
              }`}
            </Typography>
          </Grid>
        </Grid>
      );
    }
    return null;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Typography variant="h2" className={classes.title}>
          Invitar
        </Typography>
        <Paper className={classes.formBase}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Controller
                name="fullName"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    label="Nombre completo"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Debes ingresar tu nombre completo' }}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="email"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    label="Correo electrónico"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{
                  required: 'Debes ingresar un correo válido',
                  pattern: {
                    value: /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/g,
                    message: 'Debes ingresar un correo válido',
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomButton fullWidth onClick={() => reset(defaultValues)}>
                <Typography variant="h6">Limpiar</Typography>
              </CustomButton>
            </Grid>
            <Grid item xs={6}>
              <CustomButton fullWidth type="submit">
                <Typography variant="h6">Generar</Typography>
              </CustomButton>
            </Grid>
          </Grid>
          {renderInviteLink()}
        </Paper>
      </Container>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    createdInvite: state.invites.createdInvite,
  };
};

export default connect(mapStateToProps, { createInviteLink })(InviteForm);
