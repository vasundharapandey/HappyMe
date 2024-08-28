import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
       <View className="w-full justify-center min-h-[85vh] px-4 my-6">
     <Text className='text-black'>Hi</Text></View>
    </SafeAreaView>
  )
}

export default Home