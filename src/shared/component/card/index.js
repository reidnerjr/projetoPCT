import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to="/productsDetails" variant="body2">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography>Celular</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Smartphone LG G4 Stylus Dual Chip Desbloqueado Android 5.0 5.7\
              16GB 4G 13MP TiTânio
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <div
        style={{
          marginLeft: 10,
        }}
      >
        <Typography size="small" color="primary">
          10x de R$ 129,99
          <p
            style={{
              fontSize: 13,
            }}
          >
            no cartão de crédito sem juros ou R$ 1.299,99 à vista
          </p>
        </Typography>
      </div>
    </Card>
  );
}
