import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.ice};
  }
  html {
    font-size: 62.5%;
  }
  @media (max-width: 1250px) {
    html {
      font-size: 50%;
    }
  }
`;