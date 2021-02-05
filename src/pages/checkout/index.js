import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { styles, ModalContainerAlert } from './styles';
import { Typography, Modal } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@material-ui/core/TextField';

function Checkout() {
  const [state, setState] = React.useState({
    open: false,
  });

  const { open } = state;
  const history = useHistory();
  const handleOpen = () => {
    setState({ ...state, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
    history.push('/');
  };

  const classes = styles();
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
            <Button className={classes.style}>
              <h1>Store Phone</h1>
            </Button>
          </Link>
        </div>
      </Toolbar>
      <div className={classes.root}>
        <div
          style={{
            marginLeft: 90,
            minWidth: '10%',
          }}
        >
          <TextField
            id="name"
            label="*Nome"
            style={{ margin: 8 }}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="CPF"
            label="*CPF"
            style={{ margin: 8 }}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="lastname"
            label="*Endereçode entrega"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="lastname"
            label="*Bairro"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="lastname"
            label="*Endereçode entrega"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
          <TextField
            id="lastname"
            label="*Número"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
        <div
          style={{
            minWidth: '50%',
          }}
        >
          <div>
            <LockIcon />
            <Button onClick={handleOpen} className={classes.buttonFinish}>
              Finalizar compra
            </Button>
            <div className={classes.root}>
              {open && (
                <Modal className={classes.ModalAlert} open={open}>
                  <ModalContainerAlert>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                      }}
                    >
                      <CheckCircleOutlineIcon
                        style={{
                          fontSize: '107px',
                          color: '#5AC17F',
                          marginLeft: 126,
                          marginTop: 43,
                        }}
                      />
                      <div className={classes.textAlert}>
                        <Typography>
                          Parabens seu pedido foi enviado e será enviado
                        </Typography>
                      </div>
                      <div className={classes.button}>
                        <Button
                          onClick={handleClose}
                          style={{
                            background: 'orange',
                          }}
                        >
                          <Typography
                            style={{
                              fontSize: '20px',
                              color: 'black',
                              textTransform: 'none',
                            }}
                          >
                            Finalizar compra
                          </Typography>
                        </Button>
                      </div>
                    </div>
                  </ModalContainerAlert>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
