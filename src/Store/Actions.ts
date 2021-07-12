import dataFootball from "../api/football.json"

export async function fetchDataAction() {
    // const dataJSON = await fetchAPI('API');
    const dataJSON = await dataFootball;
    return dataJSON.player;
}