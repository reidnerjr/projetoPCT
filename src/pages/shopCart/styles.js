import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  header: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: '80',
  },
  root: {
    paddingTop: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    background: '#DCDCDC',
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default styles;
