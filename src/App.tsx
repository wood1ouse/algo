import { FC } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from '@app/Header';

import { darkTheme } from './theme';

const App: FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Header />
        </ThemeProvider>
    );
};

export default App;
