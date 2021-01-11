import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

function shopcart() {
  const classes = styles();
  return (
    <div>
      <Toolbar className={classes.header}>
        <div>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button className={classes.style}>
              <h1>Store Phone</h1>
            </Button>
          </Link>
        </div>
      </Toolbar>
      <div className={classes.root}>
        <Grid container spacing={5} className={classes.grid}>
          <Grid item xs={12} sm={6}></Grid>
          <h1>daada</h1>
          <Grid item xs={6} sm={3}>
            <div className={classes.card}>
              <h3>Entrega</h3>

              <Button className={classes.buttonFinish}>Finalizar compra</Button>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                }}
              >
                <Button className={classes.buttonBack}>
                  Continuar comprando
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default shopcart;
