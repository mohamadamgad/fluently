import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/testObj/";

export async function getTest() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}
