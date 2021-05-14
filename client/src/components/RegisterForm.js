import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import {
  makeStyles,
  Typography,
  Grid,
  Container,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  MenuItem,
  Paper,
  TextField,
} from '@material-ui/core';
import { createUser } from '../actions';

import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  formBase: {
    padding: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1),
  },
}));

const RegisterForm = props => {
  const { createdUser, acceptedInvite } = props;
  const classes = useStyles();

  const defaultValues = {
    fullName: '',
    email: '',
    address: '',
    sex: '',
  };

  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = data => {
    props.createUser(data);
  };

  useEffect(() => {
    if (createdUser) {
      console.log('SE HA CREADO EL USUARIO CON LOS SIGUIENTES DATOS:');
      console.log(createdUser);
    }
  }, [createdUser]);

  useEffect(() => {
    if (acceptedInvite) {
      console.log('SE HA ACEPTADO LA INVITACIÓN');
      console.log(acceptedInvite);
    }
  }, [acceptedInvite]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Typography variant="h2" className={classes.title}>
          Registrarse
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
                name="sex"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <FormControl fullWidth error={!!error}>
                    <InputLabel variant="outlined">Sexo</InputLabel>
                    <Select
                      label="Sexo"
                      variant="outlined"
                      value={value}
                      onChange={onChange}
                    >
                      <MenuItem value={1}>Masculino</MenuItem>
                      <MenuItem value={2}>Female</MenuItem>
                      <MenuItem value={0}>No especifica</MenuItem>
                    </Select>
                    <FormHelperText variant="outlined">
                      {error ? error.message : null}
                    </FormHelperText>
                  </FormControl>
                )}
                rules={{ required: 'Debes elegir una opción' }}
              />
            </Grid>
            <Grid item xs={12}>
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
                rules={{ required: 'Debes ingresar un correo válido' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="address"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    label="Dirección"
                    variant="outlined"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Debes ingresar una dirección' }}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomButton fullWidth onClick={() => reset(defaultValues)}>
                <Typography variant="h6">Limpiar</Typography>
              </CustomButton>
            </Grid>
            <Grid item xs={6}>
              <CustomButton fullWidth type="submit">
                <Typography variant="h6">Registrarse</Typography>
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
    createdUser: state.users.createdUser,
    acceptedInvite: state.users.acceptedInvite,
  };
};

export default connect(mapStateToProps, { createUser })(RegisterForm);
