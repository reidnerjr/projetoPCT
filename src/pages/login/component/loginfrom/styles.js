import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: 2,
    backgroundColor: 'rgb(190, 15, 52)',
  },
  form: {
    width: '90%',
    marginTop: 20,
  },
  submit: {
    backgroundColor: 'mediumseagreen',
    borderRadius: '30px',
    transform: '1.1',
    type: 'submit',
    width: 100,
    color: 'white',
  },
  containerButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '5%',
    marginRight: '5%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default styles;
