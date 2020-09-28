import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _test = [];

class TestStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getTest() {
        return _test;
    }
}

const store = new TestStore();

Dispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.LOAD_TEST:
            _test = action.test;
            store.emitChange();
            break;

        default:
    }
});
export default store;
