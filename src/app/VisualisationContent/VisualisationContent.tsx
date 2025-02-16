import { FC } from 'react';

import { Stack } from '@mui/material';
import { observer } from 'mobx-react';

import { Algorithms } from '@models/algorithm';
import { AlgorithmStore } from '@store';

export const VisualisationContent: FC = observer(() => {
    const { initialState } = AlgorithmStore;

    const values = initialState(Algorithms.BUBBLE_SORT);

    return (
        <Stack direction="row" gap={1} alignItems="end" mt={4}>
            {values.map((value, index) => (
                <div
                    style={{
                        textAlign: 'center',
                        background: 'white',
                        width: '30px',
                        top: '0',
                        height: `${value * 5}px`,
                    }}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                >
                    {/* {value} */}
                </div>
            ))}
        </Stack>
    );
});
