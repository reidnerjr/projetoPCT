import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useFormik, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import styles from './styles';

const schema = yup.object({
  email: yup.string().email('Email inválido').required('Obrigatório'),
  password: yup
    .string()
    .min(8, ' A senha deve ter no mínimo 8 caracteres')
    .required('Obrigatório'),
});

export default function SignIn() {
  const classes = styles();

  const formik = useFormik({
    initialValues: {
      email: 'exemplo@email.com',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(values);
    },
  });
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={4}>
        <CssBaseline />
        <div className={classes.root}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h4">
            Fazer login
          </Typography>
        </div>

        <div>
          <Formik>
            <form
              style={{
                textAlign: 'center',
              }}
              onSubmit={formik.handleSubmit}
            >
              <TextField
                className={classes.form}
                variant="outlined"
                margin="normal"
                id="email"
                label="Seu email"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                className={classes.form}
                variant="outlined"
                margin="normal"
                name="password"
                label="Senha"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <div className={classes.containerButton}>
                <Link to="/register" variant="body2">
                  Esqueceu sua senha?
                </Link>
                <Button type="submit" className={classes.submit}>
                  Entrar
                </Button>
              </div>
            </form>
          </Formik>
          <div>
            <Link href="/register">Não tem uma senha? Cadastre agora</Link>
          </div>
        </div>
        <Box mt={8} />
      </Paper>
    </Container>
  );
}
