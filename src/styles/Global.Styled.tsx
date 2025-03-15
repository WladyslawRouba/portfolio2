import { createGlobalStyle } from 'styled-components';
import { Theme } from './Theme.tsx';
export const GlobalStyle = createGlobalStyle`
    body {
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
           
        }
        margin: 0;
        font-family: 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
       
    }
    a {
        text-decoration: none;
    }
    a:visited {
        color: #DEDEDE;
    }
    ul {
        list-style: none;
    }
    button {
      background-color: unset;  
        border: none;
        }
    
    section {
        background-color: ${Theme.colors.primary};
    }

`