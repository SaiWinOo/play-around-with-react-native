import React from 'react';
import {Image, Text, View} from 'react-native';
import CustomBtn from '../../../components/atom/CustomBtn';

const Settings = () => {
  return (
    <View>
      <View
        className={
          'flex flex-row px-5 py-3 gap-2 items-center justify-between'
        }>
        <View>
          <Image
            className={'rounded-xl'}
            style={{width: 100, height: 100}}
            source={{
              uri: 'https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg',
            }}
          />
        </View>
        <View>
          <Text className={'font-bold text-xl'}>Sai Win Oo</Text>
          <Text className={'text-[10px]'}>User ID: M0ax18</Text>
        </View>
        <CustomBtn
          display={'Upgrade'}
          tclass={'p-1.5'}
          onPress={() => console.log('fdsa')}
        />
      </View>
    </View>
  );
};

export default Settings;
