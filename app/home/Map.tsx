import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

export default function Map() {
    const isFocused = useIsFocused();

    const init = async () => {
        const isFirstConnection = await AsyncStorage.getItem("isFirstConnection");
    }

    useEffect(() => {
        if (isFocused) {
            console.log("Nav on Home Page");
            init();
        }
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <Text>Map</Text>
        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: '#181923',
        width: "100%",
        height: "100%",
    },
});

