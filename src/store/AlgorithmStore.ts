import { makeAutoObservable, runInAction } from 'mobx';

import {
    Algorithms,
    AlgorithmSteps,
    DEFAULT_STATE,
    StepValue,
} from '@models/algorithm';

class AlgorithmStore {
    private state = DEFAULT_STATE;

    private isReady = false;

    init(): void {
        this.state = {
            [Algorithms.BUBBLE_SORT]: [
                [1, 3, 2],
                [1, 2, 3],
            ],
        };
        runInAction(() => {
            this.isReady = true;
        });
    }

    get steps(): (algorithm: Algorithms) => AlgorithmSteps {
        return (algorithm) => this.state[algorithm];
    }

    get initialState(): (algorithm: Algorithms) => StepValue {
        return (algorithm) => (this.isReady ? this.state[algorithm][0] : []);
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default new AlgorithmStore();
