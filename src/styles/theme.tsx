import { ThemeProvider } from 'styled-components';

const theme = {
  fonts: {
    primary: 'PT Sans',
  },
  colors: {
    c1: '#249ADD',
    c2: '#025A8B',
    c3: '#0f425f',
    ice: '#fafafa',
    white: '#fff',
    black: '#000',
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ( children: any ) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};