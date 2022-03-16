import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
    container: {
        height: '150px',
        width: '100%',
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor:'black',
        zIndex: 1101,
        position: 'fixed',
        left: 0,
        bottom: 0,
        right: 0,


    },
    firstText: {
        color: 'white',
        fontWeight: "normal",
        fontFamily: 'Anton',
        fontStyle: 'sans-serif',
        fontSize: '2rem'
    },
    secondText: {
        color: 'white',
        fontWeight: "normal",
        fontFamily: 'Anton',
        fontStyle: 'sans-serif',
        fontSize: '1rem'
    },
    logo: {

        fontSize: '3rem'
    },
}));