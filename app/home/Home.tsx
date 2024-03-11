import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import NetworkSelection from '../Components/NetworkSelection';
import { addStations, readStations } from '../../data/PortoNetwork';
import StationSearch from '../Components/StationSearch';

export default function Home() {
    const isFocused = useIsFocused();

    const init = async () => {
        const isFirstConnection = await AsyncStorage.getItem("isFirstConnection");
        console.log("isFirstConnection: " + isFirstConnection);
        addStations();
    }

    const showStations = async () => {
        await readStations().then((stations) => {
            console.log(stations);
        }
        );
    }

    useEffect(() => {
        if (isFocused) {
            console.log("Nav on Home Page");
            init();
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <NetworkSelection Networks={["Porto", "Network 2", "Network 3"]} Logos={["portoNetwork.png", "icon.png", "icon.png"]} />
            <StationSearch />
            <Button title="Afficher stations" onPress={async () => { showStations() }} />
        </View>


    );
}


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
});

