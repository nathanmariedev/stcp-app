import { readTable, replaceTable, addToTable, createTable } from "./DatabaseManager";
import Stations from './json/PortoNetwork/stations.json';
import {levenshteinEditDistance} from 'levenshtein-edit-distance'

export async function addStations() {
    await replaceTable("stations", JSON.stringify(Stations));
}

export async function readStations() {
    return readTable("stations");
}

export async function searchStations(search: string) {
    const allStations = await readTable("stations");
    if (allStations === null) {
        return [];
    }
    const stations = JSON.parse(allStations);
    const searchResults = stations.filter((station: any) => {
        console.log(station.name);
        return levenshteinEditDistance(station.name, search) <= 3;
    });
}