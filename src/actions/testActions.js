import dispatcher from "../appDispatcher";
import * as testApi from "../api/dataApi";
import actionTypes from "./actionTypes";
import db from "../api/db.json";

export async function loadTest(id) {
    // const testData = await testApi.getTest(id);
    const testData = db[id];
    console.log("testData actioins", testData);
    dispatcher.dispatch({
        actionType: actionTypes.LOAD_TEST,
        test: testData.content
    });
}
