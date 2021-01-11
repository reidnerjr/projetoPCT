import React from 'react';
import Header from 'shared/component/header';
import styles from './styles';

function productsDetails() {
  const classes = styles();

  return (
    <div className={classes.container}>
      <Header />
      <div>produto</div>
    </div>
  );
}

export default productsDetails;
