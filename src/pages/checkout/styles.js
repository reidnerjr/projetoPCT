import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: '80',
  },
  root: {
    paddingTop: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    background: '#F5F5F5',
  },
  card: {
    border: '1px solid #000',
    width: 300,
    height: 350,
    background: '#white;',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default styles;