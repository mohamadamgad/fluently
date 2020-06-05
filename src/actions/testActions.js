import dispatcher from "../appDispatcher";
import * as testApi from "../api/dataApi";
import actionTypes from "./actionTypes";

export async function loadTest(id) {
    const testData = await testApi.getTest(id);
    dispatcher.dispatch({
        actionType: actionTypes.LOAD_TEST,
        test: testData
    });
}
