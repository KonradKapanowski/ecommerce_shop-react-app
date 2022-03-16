import { makeStyles} from '@material-ui/core/styles';

const height = '200px'

export default makeStyles((theme)=>({
    divContainer: {
        paddingTop: '5rem',
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)

    },
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',

    },
    inputF:{

    },
    avatar: {
        margin: theme.spacing(2),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color:'white',
        backgroundColor:'black'
    },
    signup: {
        margin: theme.spacing(-2, 0, 2),
    },

}))