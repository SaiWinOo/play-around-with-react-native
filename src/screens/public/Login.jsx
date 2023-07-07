import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Input from '../../components/atom/Input';
import CustomBtn from '../../components/atom/CustomBtn';
const Login = ({navigation}) => {
  return (
    <View className={'flex p-7'}>
      <Input placeholder={'Email'} />
      <Input placeholder={'Password'} isPassword={true} />
      <TouchableOpacity
        onPress={() => navigation.navigate('forget-password')}
        className={'flex justify-end flex-row'}>
        <Text className={'text-main text-md'}>Forget Password?</Text>
      </TouchableOpacity>
      <CustomBtn
        onPress={() => navigation.navigate('User', {screen: 'Home'})}
        display={'Login'}
        tclass={'mt-4'}
      />
    </View>
  );
};

export default Login;
