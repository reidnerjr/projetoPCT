import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import Header from '../../shared/component/header';
import styles from './styles';

const schema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')

    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
export default function SignUp() {
  const classes = styles();

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cpf: '',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Header />

        <Paper elevation={4}>
          <CssBaseline />
          <div className={classes.root}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Preencha seus dados
            </Typography>

            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="name"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="First"
                    label="Nome"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Sobrenome"
                    name="lastName"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Senha"
                    type="Password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="cpf"
                    label="CPF"
                    mask="999.999.999-99"
                    type="cpf"
                    id="cpf"
                    autoComplete="current-cpf"
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label=" Aceito os Termos e condições e autorizo o uso de meus dados de acordo com a Declaração de privacidade."
                />
              </Grid>

              <div className={classes.containerButton}>
                <Button type="submit" className={classes.submit}>
                  Entrar
                </Button>

                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      já tem uma conta? entrar
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </form>
          </div>
          <Box mt={5} />
        </Paper>
      </Container>
    </Formik>
  );
}
