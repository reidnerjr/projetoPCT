import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

function Checkout({}) {
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
        <div>
          <Typography>Dados pessoais</Typography>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
