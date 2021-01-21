import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: '#F5F5F5',
    paddingTop: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'center',
  },
  midia: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    margin: 15,
  },
  prodcard: {
    height: 110,
    width: 700,
    marginRight: 50,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  root: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    border: '1px solid #000',
    borderColor: 'gray',
    width: 300,
    height: 400,
    background: '#white;',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 60,
  },
  buttonFinish: {
    backgroundColor: 'orange',
    borderRadius: '8px',
    height: 60,
    width: '100%',
    color: 'black',
    marginBottom: 30,
  },
  buttonBack: {
    backgroundColor: 'black',
    borderRadius: '8px',
    height: 50,
    width: '50',
    color: 'white',
  },
  void: {
    paddingTop: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    height: '100%',
    background: '#F5F5F5',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

export default styles;
