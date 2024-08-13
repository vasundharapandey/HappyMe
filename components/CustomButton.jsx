import { TouchableOpacity,Text } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity onPress={handlePress}
     activeOpacity={0.7}
     className={`bg-secondary-200  min-h-[62px] rounded-xl justify-center items-center ${containerStyles}
     ${isLoading?"opacity-50":""}`}
     disabled={isLoading}
     >
      <Text className={`text-lg text-primary font-psemibold ${textStyles}`} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton