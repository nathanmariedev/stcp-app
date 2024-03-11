import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useMemo, useState } from "react";
import {
    Dimensions,
    TouchableOpacity,
    View,
    Text,
    Image
} from "react-native";

interface NetworkSelectionProps {
    Networks: string[];
    Logos: string[];
}

// COMPOSANT POUR LA SELECTION ET REDIRECTION VERS LA CREATION DE PROFIL
const NetworkSelection: React.FC<NetworkSelectionProps> = ({
    Networks,
    Logos,
}) => {
    // TUTORIEL
    const [tutoToggle, setTutoToggle] = useState(false);
    const windowWidth = Dimensions.get("window").width;

    useEffect(() => {

    });

    return (
        <View style={{ 
            alignItems: "flex-start", 
            zIndex: 1, 
            backgroundColor: "#222231",
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            width: windowWidth,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 10,
            }}>
                
            <TouchableOpacity
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 15,
                    gap: 10,
                }}
                onPress={() => {
                    // REDIRECTION VERS LA CREATION DE PROFIL
                }}
            >
                <Image
                    source={require(`./../../assets/portoNetwork.png`)} // Or use local image: require('./path/to/your-image.jpg')
                    style={{ width: 50, height: 50}}
                />
                <Text style={{ color: "white", fontSize: 20 }}>{Networks[0]}</Text>
            </TouchableOpacity>
        </View>
    );
};


export default NetworkSelection;