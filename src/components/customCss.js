import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    referenceColor: {
        color: 'blue',
    },
    noWrapText:{
       whiteSpace: "nowrap",
       color: 'blue'
    },
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});
