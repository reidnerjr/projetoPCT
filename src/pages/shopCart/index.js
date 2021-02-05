import React, { useState, useEffect } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styles from './styles';
import CartHook from 'hook';
// import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { Card, CardMedia, Typography, CardContent } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import api from 'services/api';

function shopcart() {
  const classes = styles();
  const { Delete } = CartHook();
  const deletar = (id) => {
    Delete(id);
    getData();
  };
  const [products, setProducts] = useState([]);
  const mapearProducts = products.map((value) => value.price);
  const produtoTotal =
    products.length > 0 &&
    mapearProducts.reduce((total, valorCorrente) => total + valorCorrente);
  const getData = async () => {
    const response = await api.get('/cart');
    const data = response.data;
    setProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);
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
            <Button>
              <h1>Store Phone</h1>
            </Button>
          </Link>
        </div>
      </Toolbar>
      <div className={classes.container}>
        <div>
          {products && products.length > 0 && (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Typography
                  style={{
                    marginLeft: 15,
                    marginRight: 70,
                    fontWeight: 30,
                  }}
                >
                  Produto
                </Typography>
                <Typography
                  style={{
                    marginLeft: 15,
                    marginRight: 170,
                  }}
                >
                  Nome
                </Typography>
                <Typography
                  style={{
                    marginLeft: 15,
                    marginRight: 60,
                  }}
                >
                  Preço
                </Typography>
                <Typography
                  style={{
                    marginLeft: 15,
                    marginRight: 60,
                  }}
                >
                  Excluir
                </Typography>
              </div>
              <Divider
                style={{
                  height: 3,
                  backgroundColor: 'black',
                  width: 700,
                }}
              />
            </>
          )}
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <Card className={classes.prodcard}>
                    <CardMedia
                      className={classes.midia}
                      component="img"
                      alt="cellphone"
                      image={product.picture}
                    />
                    <CardContent>
                      <Typography
                        style={{
                          width: 210,
                          fontSize: 13,
                          justifyContent: 'center',
                        }}
                      >
                        {product.title}
                      </Typography>
                    </CardContent>
                    <Typography
                      style={{
                        alignSelf: 'center',
                        marginLeft: 10,
                      }}
                    >
                      R$ {product.price},00
                    </Typography>
                    <div
                      style={{
                        alignSelf: 'center',
                        marginLeft: 70,
                      }}
                    >
                      <IconButton>
                        <DeleteIcon onClick={() => deletar(product.id)} />
                      </IconButton>
                    </div>
                  </Card>
                </div>
              );
            })}
        </div>
        {products && products.length === 0 && (
          <div className={classes.void}>
            <Typography
              style={{
                fontSize: 45,
              }}
            >
              Seu carrinho está vazio.
            </Typography>
            <Typography
              style={{
                fontSize: 20,
              }}
            >
              Para continuar comprando, navegue pelas categorias do site ou faça
              uma busca pelo seu produto.
            </Typography>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button
                style={{
                  background: '#5bb75b',
                  color: 'white',
                  borderRadius: '8px',
                  marginBottom: 50,
                  marginTop: 50,
                }}
              >
                escolher produtos
              </Button>
            </Link>
          </div>
        )}
        {products && products.length > 0 && (
          <div className={classes.card}>
            <Typography
              style={{
                fontSize: 20,
              }}
            >
              Entrega
            </Typography>
            <div
              style={{
                margin: 30,
                fontSize: 20,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Total R$: {parseFloat(produtoTotal.toFixed(4))}
            </div>
            <Link
              to="/checkout"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button className={classes.buttonFinish}>Finalizar compra</Button>
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
        )}
      </div>
    </div>
  );
}

export default shopcart;
