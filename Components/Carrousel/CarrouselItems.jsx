import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export const CarrouselItems = (props) => {
    const {arrayItems} = props
  return (
    <View className='mt-4'>
    <ScrollView horizontal={true} centerContent={true} contentContainerStyle={styles.contentContainer} >
        {arrayItems.map((item, index) => {
            return (
                <View key={index} className=' mr-5 flex justify-center h-20 w-32 items-center bg-white p-6 rounded-xl'>
                    {item.icon}
                    <Text className='text-xs mt-1 font-semibold '>{item.texto}</Text>
                </View>
            )
        })}
    </ScrollView>
</View>
  )
}


const styles = StyleSheet.create({
    buttonOptions: {
        padding: 10,
        paddingLeft: 14,
        paddingRight: 14,
        borderRadius: 20,
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
