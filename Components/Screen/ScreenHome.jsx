import React from 'react'
import { ScrollView, View } from 'react-native'

 const ScreenHome = ({children}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100 min-h-screen mx-4">
        {children}
    </ScrollView>
  )
}

export default ScreenHome