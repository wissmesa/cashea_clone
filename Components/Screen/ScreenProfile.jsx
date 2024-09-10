import React from 'react'
import { View } from 'react-native'

 const ScreenProfile = ({children}) => {
  return (
    <View className="bg-gray-100 min-h-screen mx-4">
        {children}
    </View>
  )
}

export default ScreenProfile