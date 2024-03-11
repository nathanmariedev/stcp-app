import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Dimensions, TextInput, StyleSheet, FlatList } from "react-native";
import { searchStations } from "../../data/PortoNetwork";

interface NetworkSelectionProps {
    Networks: string[];
    Logos: string[];
}

// COMPOSANT POUR LA SELECTION ET REDIRECTION VERS LA CREATION DE PROFIL
const NetworkSelection = () => {
    const [selected, setSelected] = useState("Stops");
    const [search, setSearch] = useState<String[]>([]);
    const windowWidth = Dimensions.get("window").width;

    useEffect(() => {

    });

    return (
        <View style={{
            backgroundColor: "#222231",
            borderRadius: 30,
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 10,
            gap: 20,
        }}>

            <View style={styles.selection} >
                <TouchableOpacity style={selected === "Stops" ? styles.selected : styles.notSelected} onPress={() => setSelected("Stops")}>
                    <Text style={{ color: "white" }}>Arrêts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={selected === "Lines" ? styles.selected : styles.notSelected} onPress={() => setSelected("Lines")}>
                    <Text style={{ color: "white" }}>Lignes</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: 10,
                    width: "100%",
                }}
            >
                {selected === "Stops" && (
                    <>
                        <TextInput
                            style={styles.searchStations}
                            autoCorrect={false}
                            placeholder="Station"
                            placeholderTextColor="white"
                            cursorColor="white"
                            onChangeText={(text) => {
                                searchStations(text).then((stations) => {
                                    setSearch(stations);
                                }
                                );
                            }}
                        />

                        < FlatList
                            data={ search}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{
                                        width: "100%",
                                        height: 50,
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: 10,
                                    }}
                                    onPress={() => {
                                        // REDIRECTION VERS LA CREATION DE PROFIL
                                    }}
                                >
                                    <Text style={{ color: "white" }}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </>


                )}
                {selected === "Lines" && (
                    <TextInput
                        style={styles.searchStations}
                        autoCorrect={false}
                        placeholder="Ligne"
                        placeholderTextColor="white"
                        cursorColor="white"
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        backgroundColor: '#181923',
        width: "100%",
        height: "100%",
        color: "white",
    },
    selection: {
        width: "90%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: "#181923",
        borderWidth: 3,
        borderRadius: 50,
    },
    selected: {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#181923",
        borderRadius: 50,
        color: "white",

    },
    notSelected: {
        width: "50%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: 50,
        color: "white",
    },
    searchStations: {
        color: "white",
        width: "90%",
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        borderRadius: 5,
    },
});




export default NetworkSelection;