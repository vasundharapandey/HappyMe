import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Link,Redirect,router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4"
        >
          <Image source={images.logo}
            className="w-[180px] h-[100px]"
            resizeMode='contain' />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain" />
          <View className="relative mt-5"><Text className="text-3xl text-white font-bold text-center">
            Discover a happier you with{' '}<Text className="text-secondary-200">HappyMe
            </Text></Text>
            {/* <Image source={images.path}
              className=" w-[136px] h-[15px] absolute -bottom-2 -right-8 "
              resizeMode='contain' /> */}
               </View>
          <Text className="text-gray-100 text-center mt-7">Embark on a journey of self-exploration with HappyMe.</Text>
          <CustomButton title="Continue with email"
           handlePress={()=>{router.push('/sign-in')}}
           containerStyles="w-full mt-7"/>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622'
      style='light'/>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
