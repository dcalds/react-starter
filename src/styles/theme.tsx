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

type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

export type ThemeType = typeof theme;

export const Theme: React.FC<BoxProps> = ({ children }: BoxProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};