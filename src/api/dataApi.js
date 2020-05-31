import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/testObj/";

export async function getTest(languageId) {
    return fetch(baseUrl + "/0")
        .then(handleResponse)
        .catch(handleError);
}
