import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Main } from "../../Components/Main";
import ScreenHome from "../../Components/Screen/ScreenHome";
import { Logo } from "../../Components/LogoSVG/Logo";
import HomeSVGIcon from "../../Components/LogoSVG/ServicesCategoryLogo/Home";
import HotelLogo from "../../Components/LogoSVG/ServicesCategoryLogo/HotelLogo";
import CasheaLogo from "../../assets/CasheaLogo.png"
import { useState } from "react";
import { SaveIcon, SearchIcon } from "../../Components/Icons/Icons";
import { styled } from "nativewind";
const arrayPrueba = [
    {
        texto: "Hogar",
        icon: <HomeSVGIcon />
    },
    {
        texto: "Servicios",
        icon: <HotelLogo />
    },
    {
        texto: "Tecnologia",
        icon: <HomeSVGIcon />
    },
    {
        texto: "Deporte",
        icon: <HomeSVGIcon />
    },
    {
        texto: "Herramientas",
        icon: <HomeSVGIcon />
    },
    {
        texto: "Hoteles",
        icon: <HomeSVGIcon />
    },
    {
        texto: "Moda",
        icon: <HomeSVGIcon />
    },
    {
        texto: "Entretenimiento",
        icon: <HomeSVGIcon />
    },
    {
        texto: "Salud",
        icon: <HomeSVGIcon />
    },
]
const StyledPressable = styled(Pressable);

export default function Index() {
    const [value, setValue] = useState('')
    const [optionSelected, setoptionSelected] = useState('Principal')
    return (
        // <Main />
        <ScreenHome>
            <View className="flex-row  px-2 mt-4 justify-between  items-center">
                <View className="flex-row items-center bg-white rounded-3xl  w-28	">
                    <View style={{ backgroundColor: "#fcfb3e" }} className=" mr-2 h-5 rounded-full flex justify-center items-center border border-gray-400 py-4 px-1 ">
                        <Image
                            source={CasheaLogo}
                            style={{ width: 28, height: 28 }} />
                    </View>
                    <Text className="text- font-semibold text-xs">1.55K ⭐️</Text>
                </View>
                <View className="bg-white rounded-full p-2">
                    <SaveIcon />
                </View>
                <View className="bg-white rounded-full p-2">
                    <Text>Tiendas Cerca</Text>
                </View>
                <View className="bg-white rounded-full p-2">
                    <SaveIcon />
                </View>
            </View>
            <View className='mt-4  flex-row bg-gray-200 border rounded-full py-2 justify-center items-center'>
                <SearchIcon />
                <Text className='text-black ml-2'>¿Que necesitas #Cashear?</Text>
            </View>


            <View className='mt-4  flex-row'>
                <Pressable
                    onPress={() => setoptionSelected('Principal')}
                    style={[
                        {
                            backgroundColor: optionSelected === 'Principal' ? '#7f7f7f' : 'white',
                        }, styles.buttonOptions
                    ]}>
                    <Text style={{ color: optionSelected === 'Principal' ? 'white' : 'black', fontWeight: optionSelected === 'Principal' ? '600' : 'none' }}>Principal</Text>
                </Pressable>
                <Pressable
                    onPress={() => setoptionSelected('Cotidiana')}
                    style={[
                        { backgroundColor: optionSelected === 'Cotidiana' ? '#7f7f7f' : 'white' },
                        styles.buttonOptions
                    ]}>
                    <Text style={{
                        color: optionSelected === 'Cotidiana' ? 'white' : 'black',
                        fontWeight: optionSelected === 'Cotidiana' ? '600' : 'none'
                    }}>Cotidiana</Text>
                </Pressable>
            </View>
            <View className='mt-4 items-center justify-center'>
                <Text className='text-3xl font-extrabold'>$ 464.00</Text>
                <Text>Cashea en cuotas online o escaneando el QR</Text>
            </View>
            <ScrollView horizontal={true} centerContent={true} className='mt-10'>
                {arrayPrueba.map((item, index) => {
                    return (
                        <View key={index} className=' mr-5 flex justify-center h-20 w-32 items-center bg-white p-6 rounded-xl'>
                            {item.icon}
                            <Text className='text-xs mt-1 font-semibold '>{item.texto}</Text>
                        </View>
                    )
                })}
            </ScrollView>
            <Text>asdas</Text>
            <Text>asdas</Text>

        </ScreenHome>
    )
}

const styles = StyleSheet.create({
    buttonOptions: {
        padding: 10,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 20,
        marginLeft: 10
    },
});
