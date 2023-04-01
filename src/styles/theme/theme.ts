import {extendTheme} from '@chakra-ui/react';


const fonts = {mono: `'Menlo', monospace`};




const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',

}



const theme = extendTheme({

    colors: {
        night: "#16161D"
    },
    fonts,
    breakpoints,
})



export default theme

