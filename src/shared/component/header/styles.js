import { makeStyles }from "@material-ui/core"

const useStyles = makeStyles(() => ({
  
    root: {
      justifyContent: "space-around",
      display: "flex",
      flex: 1,
      background: 'rgb(190, 15, 52)',
      position: 'relative'
     
    },

  
    style: {
     color: 'white',
     fontSize: 11,
     fontWeight: 'bold'

    },

    avatar: {
    marginBottom: 20,
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    }
  
  }));

  export default useStyles;