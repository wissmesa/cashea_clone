import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { EmptyUserFillIcon, HelpUserIcon, ShopUserIcon } from '../../Components/Icons/Icons'
import ScreenProfile from '../../Components/Screen/ScreenProfile'
import { Stack } from 'expo-router'
import { styled } from 'nativewind'

const SeeMoreButton = styled(Pressable);

const prueba = () => {
    return (
        <ScreenProfile className="bg-gray-100 min-h-screen">
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#ffee00" },
                    headerTintColor: "black",
                    headerLeft: () => <></>,
                    headerTitle: "The Legend of Zelda: Breath of the Wild",
                    headerRight: () => { },
                }}
            />
            <View className="flex-row gap-1 px-5 mt-4">
                <Text className='text-xl'>Hola,</Text>
                <Text className='text-xl font-bold'>Luis Mesa!</Text>
                {/* <Text>Luis</Text> */}
            </View>
            <View className="flex-row  justify-between px-5  mt-4 bg-white rounded-md">
                <View className="border-solid items-center  justify-center my-4 ">
                    <View className="border-solid mb-2 justify-center flex-row bg-gray-200 opacity-50 rounded-full h-10 w-10 items-center">
                        <EmptyUserFillIcon />
                    </View>
                    <Text className="text-center">Mis{'\n'} Datos</Text>
                </View>
                <View className="border-solid justify-center items-center my-4 ">
                    <View className="border-solid mb-2 justify-center flex-row bg-gray-200 opacity-50 rounded-full h-10 w-10 items-center">
                        <ShopUserIcon />
                    </View>
                    <Text className="text-center">Mis{'\n'} Compras</Text>
                </View>
                <View className="border-solid justify-center items-center my-4 ">
                    <View className="border-solid mb-2 justify-center  flex-row bg-gray-200 opacity-50 rounded-full h-10 w-10 items-center">
                        <HelpUserIcon />
                    </View>
                    <Text className="text-center">Centro{'\n'} de ayuda </Text>
                </View>
            </View>
            <View className="flex-row  justify-between px-5  mt-4 bg-white rounded-md">
                <View className="border-solid items-left  my-4 flex-row justify-between  w-full ">
                    <View>
                        <Text className="text-left border-2 font-bold text-lg">Nivel 5</Text>
                        <Text className="text-center">Tienes 1,555 ⭐️</Text>
                    </View>
                    <View className="border-solid justify-center items-center my-4 ">
                        <SeeMoreButton className='mb-2 bg-yellow-200 rounded-xl p-2'>
                            <Text className="text-center text-black font-semibold">Cashea más</Text>
                        </SeeMoreButton>

                    </View>
                </View>
            </View>
        </ScreenProfile>
        // <Text>prueba</Text>
    )
}

export default prueba


const styles = StyleSheet.create({
    card: {
        marginBottom: 100
    },
    image: {
        width: 100,
        height: 147,
        resizeMode: "contain",
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        color: "#fff"
    },
    description: {
        fontSize: 16,
        color: "#eee"
    },
    score: {
        fontSize: 16,
        color: "green",
        marginBottom: 10,
        fontWeight: "bold"
    },
});