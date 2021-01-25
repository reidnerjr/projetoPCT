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
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from 'services/api';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import styles from './styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const schema = yup.object({
  email: yup.string().email('Email inválido').required('Obrigatório'),
  password: yup
    .string()
    .min(8, ' A senha deve ter no mínimo 8 caracteres')
    .required('Obrigatório'),
});

export default function SignIn() {
  const classes = styles();
  const history = useHistory();
  const [state, setState] = useState({
    loged: false,
    error: false,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    history.push('/');
  };

  const getData = async ({ email, password }) => {
    const response = await api.get('/user', {
      email,
      password,
    });

    if (response.data.length === 0) {
      setState({
        loged: false,
        error: true,
      });
    }
    if (
      response.data.length > 0 &&
      response.data[0].email === email &&
      response.data[0].password === password
    ) {
      setState({
        loged: true,
        error: false,
      });
    }
    console.log(response);
    return response;
  };
  const formik = useFormik({
    initialValues: {
      email: 'exemplo@email.com',
      password: '',
    },
    validationSchema: schema,
    onSubmit: getData,
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
                <Button
                  type="submit"
                  onClick={handleOpen}
                  className={classes.submit}
                >
                  Entrar
                </Button>
              </div>
            </form>
          </Formik>
          <div
            style={{
              marginLeft: 20,
            }}
          >
            <Link to="/register">Não tem uma senha? Cadastre agora</Link>
          </div>
        </div>
        <Box mt={8} />
      </Paper>
      <div
        style={{
          margin: 20,
          fontSize: 30,
        }}
      >
        {state.error && <span>usuário não encontrado</span>}
        {state.loged && (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Parabens</h2>
                <p id="transition-modal-description">logado com sucesso</p>
              </div>
            </Fade>
          </Modal>
        )}
      </div>
    </Container>
  );
}
