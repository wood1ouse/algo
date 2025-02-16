export type StepValue = number[];

export type AlgorithmSteps = StepValue[];

export enum Algorithms {
    BUBBLE_SORT = 'bubbleSort',
}

export const DEFAULT_STATE: Record<Algorithms, AlgorithmSteps> = {
    [Algorithms.BUBBLE_SORT]: [],
};
