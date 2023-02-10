import CompassManager from "./CompasManager";

class Collection {
    manager: CompassManager;

    constructor (manager: CompassManager) {
        this.manager = manager;
    }

    regenerateMessage () {
        const { message, user } = this.manager;
    }
}

export default Collection;