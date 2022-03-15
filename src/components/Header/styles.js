import { makeStyles} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        backgroundColor:'black',
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        color: 'white',
        fontWeight: "bold",
        fontFamily: 'Anton',
        fontStyle: 'sans-serif',
        fontSize: '3rem',
    },
    image: {
        marginRight: '10px',
        height: '35px',
    },
    button:{
        color: "white",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    login: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        marginRight: '35px',
        fontFamily: 'Anton',
        fontStyle: 'sans-serif',
    },
    menuItem:{
        textDecoration: 'none',
        color: 'white',
        fontWeight: "bold",
        fontFamily: 'Anton',
        fontStyle: 'sans-serif',
        fontSize: '2rem',
        marginLeft: '1rem',

    }
}));