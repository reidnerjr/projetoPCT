import React, { useEffect, useState } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import Header from 'shared/component/header';
import styles from './styles';
import api from 'services/api';

function productsDetails(props) {
  const { id } = props.match.params;
  const classes = styles();
  const [product, setProduct] = useState({});
  const getData = async () => {
    const response = await api.get(`/products/${id}`);
    const data = response.data;

    setProduct(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />

      <Box>
        <img alt="" className={classes.media} src={product.picture} />
      </Box>
      <Box style={{ maxWidth: 600 }}>
        <Typography className={classes.title}>{product.title}</Typography>
        <br />
        <Typography
          variant="h6"
          color="textSecondary"
          className={classes.title}
        >
          <b>Descrição:</b> {product.description}
        </Typography>
        <Typography className={classes.title}>
          <b>Memória:</b> {product.memory}
        </Typography>
        <Typography className={classes.title}>
          <b>Chip:</b> {product.chipType}
        </Typography>
        <br />
        <Typography>{`R$ ${product.price}`}</Typography>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={() => Comprar(id)}
        >
          {' '}
          ADICIONAR AO CARRINHO{' '}
        </Button>
      </Box>
    </div>
  );
}

export default productsDetails;
