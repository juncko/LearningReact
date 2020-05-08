import{ createMuiTheme } from '@material-ui/core/styles';
const themeApp = createMuiTheme({
    typography : {
        useNextVariants: true
    },
    palette : {
        primary : {
            main: '#006db3'
        },
        common:{
            white : 'white'
        },
        secondary:{
            main: '#e53935'
        }
    },
    spacing : 10
})

export default themeApp;