import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';

export default function ImgMediaCard({ title, price, picture }) {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <Card
        style={{
          height: 400,
        }}
      >
        <CardActionArea className={classes.root}>
          <CardMedia
            className={classes.midia}
            component="img"
            alt="cellphone"
            image={picture}
          />
          <CardContent>
            <Typography>{title}</Typography>
          </CardContent>
        </CardActionArea>

        <div
          style={{
            marginLeft: 10,
          }}
        >
          <Typography> R${price},00 </Typography>
        </div>
      </Card>
    </Paper>
  );
}

ImgMediaCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  picture: PropTypes.string,
};

ImgMediaCard.defaultProps = {
  title: '',
  price: '',
  picture: '',
};
