import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useStyles from './styles';

export default function ImgMediaCard({ title, price }) {
  const classes = useStyles();

  return (
    <Card>
      <Link to="/productsDetails" variant="body2">
        <CardActionArea className={classes.root}>
          <CardMedia
            component="img"
            height="120"
            alt="Contemplative Reptile"
            image="https://reactnative.dev/img/tiny_logo.png"
          />
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <div
        style={{
          marginLeft: 10,
        }}
      >
        <Typography> R$ {price}</Typography>
      </div>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
};

ImgMediaCard.defaultProps = {
  title: '',
  price: '',
};
