import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
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
}));

export default styles;
