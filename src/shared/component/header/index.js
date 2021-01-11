import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';
import api from 'services/api';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const getFF = async (id) => {
    const response = await api.get(`/products/${id}`);
    const data = await response.data;
    setProducts(data);
    console.log(data);
  };
  const getData = async () => {
    const response = await api.get('/products');
    const data = await response.data;

    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.root}>
          <div>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button className={classes.style}>
                <h1>Loja de celulares </h1>
              </Button>
            </Link>
          </div>
          <div>
            <div>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                onChange={getFF}
                disableClearable
                options={
                  products &&
                  products.length > 0 &&
                  products.map((value) => value.title)
                }
                renderInput={(params) => (
                  <TextField
                    className={classes.search}
                    {...params}
                    label="o que você procura?"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                  />
                )}
              />
            </div>
          </div>

          <div className={classes.avatar}>
            <AccountCircleIcon
              alt="Remy Sharp"
              src="/broken-image.jpg"
            ></AccountCircleIcon>
            <Link
              to="/login"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button className={classes.style}>Entre</Button>
            </Link>
            <Typography className={classes.style}>ou</Typography>
            <Link
              to="/register"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button className={classes.style}>cadastra-se</Button>
            </Link>
            <Link
              to="/shopcart/:id/"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button className={classes.style}>
                <ShoppingCartIcon /> Meu Carrinho
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
