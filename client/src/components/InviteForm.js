import React, { useEffect } from 'react';
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
}));

const InviteForm = props => {
  const { createdInvite } = props;

  const classes = useStyles();

  const defaultValues = {
    fullName: '',
    email: '',
  };

  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = data => {
    props.createInviteLink(data);
  };

  useEffect(() => {
    if (createdInvite) {
      console.log('SE HA CREADO CORRECTAMENTE LA INVITACIÓN');
      console.log(createdInvite);
    }
  }, [createdInvite]);

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
                  pattern: /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/g,
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
