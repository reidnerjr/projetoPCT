import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
// import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

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
          <div className={classes.propsBar}>
            <Typography
              style={{
                textAlign: 'center',
              }}
            >
              Produto
            </Typography>
            <Typography>Preço</Typography>
            <Typography>Quantidade</Typography>
            <Typography>Total</Typography>
          </div>
          {/* <Divider variant="fullWidth" orientation="horizontal" /> */}
          <Grid item xs={6} sm={3}>
            <div className={classes.card}>
              <h3>Entrega</h3>
              <Link
                to="/checkout"
                style={{
                  textDecoration: 'none',
                }}
              >
                <Button className={classes.buttonFinish}>
                  Finalizar compra
                </Button>
              </Link>
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
