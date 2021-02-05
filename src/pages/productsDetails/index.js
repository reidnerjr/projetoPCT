import React, { useEffect, useState } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import Header from 'shared/component/header';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import CartHook from 'hook';
import api from 'services/api';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function productsDetails(props) {
  const [state, setState] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState(false);
  };
  const { Buy } = CartHook();
  const { id } = props.match.params;
  const comprar = (product) => {
    Buy(product);
    setState(true);
  };
  const [product, setProduct] = useState({});
  const getData = async () => {
    const response = await api.get(`/products/${id}`);
    const data = response.data;

    setProduct(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const classes = styles();
  return (
    <div className={classes.container}>
      <Header />

      <Box style={{ maxWidth: 600 }}>
        <img alt="" className={classes.media} src={product.picture} />
        <Divider />
        <br />
        <Box overflow="auto" height="250px">
          <Typography color="textSecondary" className={classes.title}>
            <p>
              <strong>DESCRIÇÃO:</strong>
            </p>
            {product.description}
          </Typography>
        </Box>
      </Box>
      <Box style={{ maxWidth: 400 }}>
        <Typography className={classes.title}>{product.title}</Typography>
        <br />
        <div>
          <Typography className={classes.add}>{`${product.price} `}</Typography>
          <Typography
            className={classes.price}
          >{`R$ ${product.price}`}</Typography>
          {state && (
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={state}
              autoHideDuration={3000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="success">
                item adicionado no carrinho
              </Alert>
            </Snackbar>
          )}
          <Button className={classes.button} onClick={() => comprar(product)}>
            ADICIONAR AO CARRINHO
          </Button>
        </div>
        <Typography className={classes.title}>
          <b>Memória:</b> {product.memory}
        </Typography>
        <Typography className={classes.title}>
          <b>Chip:</b> {product.chipType}
        </Typography>
        <div
          style={{
            marginTop: 26,
            marginLeft: 20,
          }}
        >
          <br />
          <Typography color="textSecondary" className={classes.title}>
            <Divider />
            <p>
              <strong>Garantia:</strong>
            </p>
            <p className="title">Compra garantia do vendendor </p>
            <p className="description">
              Receba o produto que você está esperando ou devolvemos seu
              dinherio
            </p>
          </Typography>
        </div>
      </Box>
    </div>
  );
}

export default productsDetails;
