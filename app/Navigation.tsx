import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home as LucideHome } from "lucide-react-native";
import { MapPin as LucideMap } from "lucide-react-native";
import Home from './home/Home'
import Map from './home/Map';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="HomeHandler"
                    component={HomeHandler}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeHandler() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#76448A",
                tabBarInactiveTintColor: "#4F4F60",
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { // TOUTE LA NAV
                    position: "absolute",
                    height: 100,
                    borderTopWidth: 0,
                    backgroundColor: "#222231",
                    justifyContent: "space-between",
                    width:"100%",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    zIndex: 100,
                },
                tabBarIconStyle: {
                    color: "#FFFFFF30",
                },
                tabBarItemStyle: { // CHAQUE ICONE DE LA NAV
                    width: "100%",
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    margin: 0,
                    padding: 0,
                },
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => <LucideHome color={color} size={30} />
                }}
            />
            <BottomTab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ color }) => <LucideMap color={color} size={30} />
                }}
            />
        </BottomTab.Navigator>
    );
}
