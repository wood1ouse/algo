import { FC, useEffect } from 'react';

import { observer } from 'mobx-react';

import { AlgorithmStore } from '@store';

export const Init: FC = observer(() => {
    useEffect(() => {
        AlgorithmStore.init();
    }, []);
    return null;
});
