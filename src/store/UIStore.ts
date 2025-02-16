import { makeAutoObservable } from 'mobx';

class UIStore {
    isVisualisationSelectOpened = false;

    isVisualisationSettingsOpened = false;

    toggleIsVisualisationSelectOpened(): void {
        this.isVisualisationSelectOpened = !this.isVisualisationSelectOpened;
    }

    toggleisVisualisationSettingsOpened(): void {
        this.isVisualisationSettingsOpened =
            !this.isVisualisationSettingsOpened;
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export default new UIStore();
