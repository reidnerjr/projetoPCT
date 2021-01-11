import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import api from 'services/api';
import { Link } from 'react-router-dom';
import Card from 'shared/component/card';
import Footer from 'shared/component/footer';
import Header from 'shared/component/header';
import styles from './styles';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await api.get('/products');
    const data = await response.data;

    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);
  const classes = styles();

  return (
    <>
      <div className={classes.container}>
        <Header />

        <Grid container justify="center" spacing={4}>
          {products.map((value) => (
            <Grid key={value} item>
              <Link
                to={`/productsDetails/${value.id}`}
                style={{
                  textDecoration: 'none',
                }}
              >
                <Card
                  title={value.title}
                  price={value.price}
                  picture={value.picture}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
