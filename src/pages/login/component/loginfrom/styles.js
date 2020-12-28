import { makeStyles } from '@material-ui/core/styles'

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
      margin: theme.spacing(3, 0, 2),
      backgroundColor: 'mediumseagreen',
      borderRadius: '30px',
      transform: '1.1',
      type:"submit",
      width: 100,  
      display:'flex',
      flex:1,
      alignItems:'flex-end',
      color:'white'
    },
   
  }));

  export default styles;