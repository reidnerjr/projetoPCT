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
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    border: '1px solid #000',
    width: 300,
    height: 350,
    background: '#FFFAFA;',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonFinish: {
    backgroundColor: 'orange',
    borderRadius: '10px',
    height: 60,
    width: '100%',
    color: 'black',
    marginBottom: 20,
  },
  buttonBack: {
    backgroundColor: 'black',
    borderRadius: '10px',
    height: 50,
    width: '50',
    color: 'white',
  },
  propsBar: {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    padding: 8,
  },
}));

export default styles;
