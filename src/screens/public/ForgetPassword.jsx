import React from 'react';
import {View} from 'react-native';
import Input from '../../components/atom/Input';
import CustomBtn from '../../components/atom/CustomBtn';
const ForgetPassword = () => {
  return (
    <View className={'p-7 '}>
      <Input placeholder={'Email'} />
      <CustomBtn tclass={'mt-4'} display={'Send Link'} />
    </View>
  );
};

export default ForgetPassword;
