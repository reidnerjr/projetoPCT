import { makeStyles } from '@material-ui/core/styles';
const styles = makeStyles(() => ({
  media: {
    height: 450,
    width: 450,
    padding: '2em',
    margin: 30,
    display: 'block',
    border: '1px solid gray',
  },

  title: {
    fontSize: '19px',
    color: 'black',
    marginTop: 30,
  },
  price: {
    fontSize: '40px',
    color: 'black',
    marginTop: 30,
    marginBottom: 50,
  },
  button: {
    background: 'rgb(190, 15, 52)',
    textAlign: 'center',
    marginBottom: 30,
    color: 'white',
    fontSize: '18px',
    height: 60,
  },
  container: {
    paddingTop: '5%',
    marginRight: '3%',
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
  },
}));
export default styles;
