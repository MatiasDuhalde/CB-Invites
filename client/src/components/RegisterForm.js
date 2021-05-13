import React from 'react';
import { useForm, Controller } from 'react-hook-form';
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
  const classes = useStyles();

  const defaultValues = {
    fullName: '',
    email: '',
    address: '',
    sex: '',
  };

  const { handleSubmit, control, reset } = useForm({ defaultValues });

  const onSubmit = data => {
    props.onSubmit(data);
  };

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
                      <MenuItem value="male">Masculino</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="other">No especifica</MenuItem>
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
              <CustomButton onClick={() => reset(defaultValues)}>
                Limpiar
              </CustomButton>
            </Grid>
            <Grid item xs={6}>
              <CustomButton type="submit">Registrarse</CustomButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </form>
  );
};

export default RegisterForm;
