import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  root: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 3,
    backgroundColor: 'rgb(190, 15, 52)',
  },
  form: {
    width: '95%',
    marginTop: 20,
  },
  submit: {
    backgroundColor: 'mediumseagreen',
    borderRadius: '30px',
    transform: '1.1',
    type: 'submit',
    width: 100,
    marginTop: 10,
    color: 'white',
  },
}));

export default styles;
