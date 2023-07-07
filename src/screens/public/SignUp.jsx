import React from 'react';
import {View} from 'react-native';
import Input from '../../components/atom/Input';
import CustomBtn from '../../components/atom/CustomBtn';
const SignUp = () => {
  return (
    <View className={'flex p-7'}>
      <Input placeholder={'Email'} />
      <Input placeholder={'Name'} />
      <Input placeholder={'Password'} />
      <Input placeholder={'Phone Number(optional)'} isPassword={true} />
      <CustomBtn display={'Sign Up'} />
    </View>
  );
};

export default SignUp;
