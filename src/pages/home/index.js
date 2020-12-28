import React, { useEffect, useState } from 'react';
import Header from '../../shared/component/header'
import styles from "./styles";
import Footer from '../../shared/component/footer'
import Card from '../../shared/component/card'
import Grid from '@material-ui/core/Grid';
import api from '../../services/api';

export default function HomePage() {

  const [products , setProducts] = useState([])

  const getData = async () => {
    const response = await api.get('/products')
    console.log(response)
    const data = await response.data;

    setProducts(data);
  }

  useEffect(() => {
    getData()
  }, []);
  const classes = styles();

  return (
    <>
      <div className={classes.container}>
        <Header />
         
        <Grid container justify="center" spacing={4}>
          {products.map((value) => (
            <Grid key={value} item>
              <Card></Card>
            </Grid>
          ))}
        </Grid>

      </div>
      <Footer  />
    </>
  )
}

