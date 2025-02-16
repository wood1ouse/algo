import { FC } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { Header } from '@app/Header';
import { Init } from '@app/Init/Init';
import { Layout } from '@app/Layout';

import { darkTheme } from './theme';

const App: FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Init />
            <CssBaseline />
            <Header />
            <Layout />
        </ThemeProvider>
    );
};

export default App;
