import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// import {Google, SmartPhone} from '../../components/icons/Icons';
const Start = ({navigation}) => {
  return (
    <View className="h-screen justify-center align-center bg-white">
      <View className="basis-1/2 justify-center align-center">
        <View className="justify-center align-center flex-row">
          <Image
            style={{width: 100, height: 100}}
            source={require('./../../assets/images/logo.png')}
          />
        </View>
        <Text className="text-center font-bold text-main text-3xl">
          Show Note
        </Text>
        <Text className="text-main text-center mt-2 font-semibold">
          (30) မိနစ် တက္ကသိုလ်
        </Text>
      </View>
      <View className="basis-1/2 pt-10 mx-6">
        <View>
          <TouchableOpacity className="bg-main rounded-lg relative flex-row align-center p-2.5 mb-4">
            {/* <SmartPhone className="bg-main absolute top-1/3 left-4" /> */}
            <Text className="text-md text-white mx-auto font-semibold">
              Continue with Phone Number
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 relative rounded-lg flex-row align-center p-2.5">
            {/* <Google className="absolute top-1/3 left-5 mt-1" /> */}
            <Text className="text-md text-black mx-auto font-semibold">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-10 relative flex-row justify-center align-end ">
          <View className="border-b flex-1 border-b-gray-300" />
          <Text className="mx-3 absolute z-[30] bg-white text-gray-400 w-[40] text-center bottom-[-7]">
            OR
          </Text>
          <View className="border-b flex-1 border-b-gray-300" />
        </View>
        <View className="mt-10">
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text className="text-main font-semibold text-md text-center">
              Login with ShowNote Account
            </Text>
          </TouchableOpacity>
          <View className={'flex-row  justify-center mt-4'}>
            <Text className={'font-semibold text-md text-center'}>
              Create New ShowNote Account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text className="text-main text-md ml-2 font-semibold">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Start;
