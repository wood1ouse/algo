import { styled, Theme } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

// https://mui.com/material-ui/react-drawer/

interface AppBarProps extends MuiAppBarProps {
    leftBarOpened?: boolean;
    rightBarOpened?: boolean;
}

const DRAWER_HEIGHT = 64;
const DRAWER_WIDTH = 240;

const createMainTransition: (theme: Theme) => string = (theme) =>
    theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    });

const createAppBarTransition: (theme: Theme) => string = (theme) =>
    theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    });

export const Main = styled('main', {
    shouldForwardProp: (prop) =>
        prop !== 'leftBarOpened' && prop !== 'rightBarOpened',
})<{
    leftBarOpened?: boolean;
    rightBarOpened?: boolean;
}>(({ theme }) => ({
    flexGrow: 1,
    transition: createMainTransition(theme),
    height: `calc(100vh - ${DRAWER_HEIGHT}px)`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: `${DRAWER_HEIGHT}px`,
    marginLeft: `-${DRAWER_WIDTH}px`,
    marginRight: `-${DRAWER_WIDTH}px`,

    variants: [
        {
            props: ({ leftBarOpened }) => leftBarOpened,
            style: {
                transition: createMainTransition(theme),
                marginLeft: 0,
            },
        },
        {
            props: ({ rightBarOpened }) => rightBarOpened,
            style: {
                transition: createMainTransition(theme),
                marginRight: 0,
            },
        },
    ],
}));

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) =>
        prop !== 'leftBarOpened' && prop !== 'rightBarOpened',
})<AppBarProps>(({ theme }) => ({
    transition: createAppBarTransition(theme),
    variants: [
        {
            props: ({ leftBarOpened }) => leftBarOpened,
            style: {
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                marginLeft: `${DRAWER_WIDTH}px`,
                transition: createAppBarTransition(theme),
            },
        },
        {
            props: ({ rightBarOpened }) => rightBarOpened,
            style: {
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                marginRight: `${DRAWER_WIDTH}px`,
                transition: createAppBarTransition(theme),
            },
        },
        {
            props: ({ leftBarOpened, rightBarOpened }) =>
                leftBarOpened && rightBarOpened,
            style: {
                width: `calc(100% - ${DRAWER_WIDTH * 2}px)`,
                transition: createAppBarTransition(theme),
            },
        },
    ],
}));
