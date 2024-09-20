import { styled } from 'nativewind';
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const StyledPressable = styled(Pressable);

export const CarrouselTitle = (props) => {
   const {titleSection,titleButton} = props
  return (
    <View className='mt-4 flex-row items-center justify-between px-1'>
      <Text className='text-xl font-extrabold'>{titleSection}</Text>
      <StyledPressable className="p-3 px-4 bg-yellow-200 rounded-full">
        <Text className="text-black-500">{titleButton}</Text>
      </StyledPressable>
    </View>
  )
}
