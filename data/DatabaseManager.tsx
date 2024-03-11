import AsyncStorage from "@react-native-async-storage/async-storage";
import stations from "./json/PortoNetwork/stations.json";

export async function readTable(table: string) {
    return AsyncStorage.getItem(table);
}

export async function replaceTable(table: string, data: string) {
    return AsyncStorage.setItem(table, data);
}

export async function addToTable(table: string, data: string) {
    const currentData = readTable(table);
    return replaceTable(table, currentData + data);
}

export async function createTable(table: string) {
    return AsyncStorage.setItem(table, "");
}

