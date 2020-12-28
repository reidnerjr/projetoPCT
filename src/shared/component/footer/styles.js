import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles(() => ({
  
    fixarRodape:{  
      background: 'rgb(190, 15, 52)',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      width: '100%',
      marginTop: '7%',
      flexDirection:'column',  
      bottom:0 
    
    },
    root:{
        alignItems: 'center',
        flex:1,
        display: 'flex',
        color:'white'
    },
    typography: {
      fontSize: 20,
      alignItems:'center',
      justifyContent: 'center',
      color:'white'
    },

  }));

  export default styles;