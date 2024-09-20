import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export const CarrouselLargeItems = (props) => {
    const {arrayItems} = props
    return (
        <View className='mt-4'>
            <ScrollView horizontal={true} centerContent={true} contentContainerStyle={styles.contentContainer} >
                {arrayItems.map((item, index) => {
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
        </View>)
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
