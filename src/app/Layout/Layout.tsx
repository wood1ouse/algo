import { FC } from 'react';

import { Stack } from '@mui/material';
import { observer } from 'mobx-react';

import { VisualisationContent } from '@app/VisualisationContent';
import { VisualisationSelect } from '@app/VisualisationSelect';
import { VisualisationSettings } from '@app/VisualisationSettings';
import { Main } from '@components/AppBar';
import { UIStore } from '@store';

export const Layout: FC = observer(() => (
    <Stack direction="row">
        <VisualisationSelect />
        <Main
            leftBarOpened={UIStore.isVisualisationSelectOpened}
            rightBarOpened={UIStore.isVisualisationSettingsOpened}
        >
            <VisualisationContent />
        </Main>
        <VisualisationSettings />
    </Stack>
));
