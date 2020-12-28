import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import styles from "./styles";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


export default function SignIn() {
  const classes = styles();


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

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Seu email"
              name="email"
              autoComplete="email"

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
            />

            <div>
              <Link href='/register'>
                {`Não tem uma senha? Cadastre agora`}
              </Link>
            </div>

            <div>

              <Button className={classes.submit}>
                Entrar
              </Button>

            </div>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
              </Link>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Paper>
    </Container>
  );
} 
