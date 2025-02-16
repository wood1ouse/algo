import { FC } from 'react';

import { Drawer } from '@mui/material';
import { observer } from 'mobx-react';

import { UIStore } from '@store';

export const VisualisationSettings: FC = observer(() => {
    return (
        <Drawer
            open={UIStore.isVisualisationSettingsOpened}
            sx={{
                width: '240px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '240px',
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="right"
        >
            VisualisationSettings
        </Drawer>
    );
});
