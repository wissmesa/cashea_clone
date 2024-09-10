import { Tabs } from "expo-router";
import { View } from "react-native";
import { useIsFocused } from '@react-navigation/native';

import { EmptyHomeIcon, HomeIcon, InfoIcon, QrIcon, EmptyUserIcon, EmptyUserFillIcon } from "../../Components/Icons/Icons";

export default function TabsLayout() {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#fff" },
                tabBarActiveTintColor: "gray",
                tabBarInactiveTintColor: "#d6d6d0",
            }}
        >
            <Tabs.Screen
                name="index"
                options={() => ({
                    title: "Inicio", // Título dinámico basado en los parámetros de la ruta
                    tabBarIcon: ({ color }) => {
                        const isFocused = useIsFocused();
                        return (
                            <View>
                                {isFocused ? (
                                    <HomeIcon color={color} />
                                ) : (
                                    <EmptyHomeIcon color={color} />
                                )}
                            </View>
                        );
                    },
                    tabBarIconStyle: {
                        color: "gray",
                    }
                })}
            />
            <Tabs.Screen
                name="qr"
                options={{
                    title: "",
                    tabBarIcon: ({ color }) => (
                        <View style={{
                            borderRadius: 50, // Ajusta el radio del borde según tus preferencias
                            borderColor: 'yellow',
                            borderWidth: 2, // Ajusta el grosor del borde según tus preferencias
                            display: "flex",
                            justifyContent: "center",
                            // backgroundColor: "red",
                            padding: 8,
                            marginTop: 20,
                            height: 50,
                        }}>
                            <QrIcon color={color} />
                        </View>
                    ),
                    tabBarItemStyle: {
                        justifyContent: "center",
                        display: "flex",
                    }
                }}
            />
            <Tabs.Screen
                name="perfil"
                options={() => ({
                    title: "Perfil", // Título dinámico basado en los parámetros de la ruta
                    tabBarIcon: ({ color }) => {
                        const isFocused = useIsFocused();
                        return (
                            <View>
                                {isFocused ? (
                                    <EmptyUserIcon color={color} />
                                ) : (
                                    <EmptyUserFillIcon color={color} />
                                )}
                            </View>
                        );
                    },
                    tabBarIconStyle: {
                        color: "gray",
                    }
                })}
            />
        </Tabs>
    );
}