import React from 'react';
import { Link, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import useStyles from './styles'

export default function ClassesNesting() {
  const classes = useStyles();

  return (
    <div className={classes.fixarRodape}>
        <div className={classes.root}>

        <h1>Loja de celulares</h1>
    
        <Link href="https://www.instagram.com/reactjsofficial/"style={{
          textDecoration:'none',
          color:'white',
          marginLeft:90,
        }}>
        <InstagramIcon/>
        </Link>
    
        <Link href="https://www.instagram.com/reactjsofficial/" variant="outline" style={{
          textDecoration:'none',
          color:'white'
        }}>
        <FacebookIcon/>
        </Link>

        <Link href="https://www.instagram.com/reactjsofficial/" variant="outline" style={{
          textDecoration:'none',
          color:'white'
        }}>
        <EmailIcon/>
        </Link>

      </div>
      <Typography className={classes.typography}>
        Os preços, promoções, condições de pagamento, frete e produtos são válidos exclusivamente para compras realizadas via internet.
        Fotos meramente ilustrativas. Copyright © 2003-2011- Todos os direitos reservados.
     </Typography>
    
    </div>

  );
}