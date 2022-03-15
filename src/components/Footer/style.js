import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
    container: {
        height: '150px',
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        backgroundColor:'black',
        zIndex: 1101,


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
        marginLeft: '15px',
        fontSize: '3rem'
    }
}));