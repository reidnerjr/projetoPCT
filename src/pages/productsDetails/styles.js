import { makeStyles } from '@material-ui/core/styles';
// import style from 'styled-'
const styles = makeStyles(() => ({
  media: {
    height: 100,
    width: 100,
    padding: '2em',
    margin: 30,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontSize: '16px',
    color: 'black',
  },
  noProdMessage: {
    fontSize: '50px',
    color: '#000080',
    fontWeight: 'bold',
  },
}));
export default styles;
