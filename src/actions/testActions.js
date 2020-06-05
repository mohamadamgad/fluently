import dispatcher from "../appDispatcher";
import * as testApi from "../api/dataApi";
import actionTypes from "./actionTypes";

export async function loadTest(id) {
    const testData = await testApi.getTest(id);
    console.log("testData actioins", testData);
    dispatcher.dispatch({
        actionType: actionTypes.LOAD_TEST,
        test: testData.content
    });
}
