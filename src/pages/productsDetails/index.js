import { Typography } from '@material-ui/core';
import React from 'react';
import Header from 'shared/component/header';

import styles from './styles';

export default function productsDetails() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.card}>
        <Typography>{}</Typography>
      </div>
    </div>
  );
}
