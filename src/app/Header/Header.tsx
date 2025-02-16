import { FC } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';

import { AppBar } from '@components/AppBar';
import { UIStore } from '@store';

export const Header: FC = observer(() => {
    return (
        <AppBar
            position="fixed"
            leftBarOpened={UIStore.isVisualisationSelectOpened}
            rightBarOpened={UIStore.isVisualisationSettingsOpened}
        >
            <Toolbar>
                <IconButton
                    onClick={() => UIStore.toggleIsVisualisationSelectOpened()}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Algo
                </Typography>

                <IconButton
                    onClick={() =>
                        UIStore.toggleisVisualisationSettingsOpened()
                    }
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
});
