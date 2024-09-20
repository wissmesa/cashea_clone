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
import InviteFriendsBanner from "../../assets/InviteFriendsBanner.jpeg";
import { CarrouselItems } from "../../Components/Carrousel/CarrouselItems";
import { CarrouselTitle } from "../../Components/Carrousel/CarrouselTitle";
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
const arrayOptionsForUser = [
    {
        title: "CASHEA",
        texto: "Los favoritos de Cashea: !Productos que no puedes dejar pasar!",
        icon: <HomeSVGIcon />
    },
    {
        title: "DAMASCO",
        texto: "Renueva tu hogar con Damasco: Mas cuotas, mas comodidad para ti",
        icon: <HomeSVGIcon />
    }, {
        title: "SOYTECHNO",
        texto: "Los mejores productos para el regreso a clases con Soytechno",
        icon: <HomeSVGIcon />
    }, {
        title: "CASHEA",
        texto: "El regreso a clases es facil con Cashea! Encuentra todo lo que necesitas aqui",
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
                        { backgroundColor: optionSelected === 'Cotidiana' ? '#7f7f7f' : 'white', marginLeft: 10 },
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
                <View className='border-2 w-full border-yellow-200 my-2'></View>
                <Text>Cashea en cuotas online o escaneando el QR</Text>
            </View>
            {/* SCROLL VIEW DE PRODUCTOS */}
            <CarrouselItems arrayItems={arrayPrueba} />
            {/* MODO MAS CUOTAS */}
            <CarrouselTitle titleSection="Modo más cuotas" titleButton="Ver más" />
            <CarrouselItems arrayItems={arrayPrueba} />
            {/* TIENDAS DISPONIBLES */}
            <CarrouselTitle titleSection="Tiendas disponibles" titleButton="Ver más" />
            <CarrouselItems arrayItems={arrayPrueba} />
            {/* DESCUENTOS EN LO QUE NECESITAS */}
            <CarrouselTitle titleSection="Descuentos para ti" titleButton="Ver más" />
            <CarrouselItems arrayItems={arrayPrueba} />
            {/* OPCIONES DE RECUERDO */}
            <View className='mt-4'>
                <ScrollView horizontal={true} centerContent={true} contentContainerStyle={styles.contentContainer} >
                    {arrayOptionsForUser.map((item, index) => {
                        return (
                            <View key={index} className=' mr-2  h-30 w-80  bg-white p-6 rounded-xl'>
                                <View>
                                    <Text className='text-sm text-gray-400 font-normal'>{item.title}</Text>
                                    <View className='flex-row '>
                                        <View className='flex-shrink '>
                                            <Text className='text-xs mt-1  font-semibold flex-shrink '>{item.texto}</Text>
                                        </View>
                                        <View>{item.icon}</View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            {/* DESCUENTOS EN LO QUE NECESITAS */}
            <View className='mt-4 flex-row items-center justify-between px-1'>
                <Text className='text-xl font-extrabold border-2'>Destacados de la Semana </Text>
                <StyledPressable className="p-3 px-4 bg-yellow-200 rounded-full">
                    <Text className="text-black-500">Ver más</Text>
                </StyledPressable>
            </View>
            <View className='mt-4'>
                <ScrollView horizontal={true} centerContent={true} contentContainerStyle={styles.contentContainer} >
                    {arrayPrueba.map((item, index) => {
                        return (
                            <View key={index} className=' mr-2 flex justify-center h-20 w-40 items-center bg-white p-6 rounded-xl'>
                                {item.icon}
                                <Text className='text-xs mt-1 font-semibold '>{item.texto}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            {/* FOOTER */}
            <View className='my-4'>
                <Image
                    source={InviteFriendsBanner}
                    style={{ width: 355, height: 70 }} />
            </View>
            <View className='mb-64'>
                <Text>Grupo Cashea VE C.A. no está autorizado por la
                    Superintendencia de Instituciones del Sector Bancario
                    (SUDEBAN) para intermediar o fungir como pasarela de pagos entre clientes y comercios. Cashea es un portal que ofrece a los clientes acceder a compras a plazo en comercios afiliados pero son estos últimos quienes otorgan dicho beneficio. Los clientes abonarán o depositarán los pagos o cuotas directamente en las cuentas bancarias de los comercios.</Text>
            </View>
        </ScreenHome>
    )
}

const styles = StyleSheet.create({
    buttonOptions: {
        padding: 10,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 20,
        // marginLeft: 5
    },
    contentContainer: {
        paddingVertical: 18,
    },
    buttonShowMore: {
        padding: 10,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 20,
        marginLeft: 10,
        backgroundColor: 'yellow'
    }
});
