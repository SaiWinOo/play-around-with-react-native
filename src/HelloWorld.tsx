import React, {memo} from 'react';
import {Text, View} from 'react-native';
const HelloWorld = ({count, onPress}: {count: Number; onPress: () => void}) => {
  console.log('hello world');

  return (
    <View>
      <Text onPress={onPress} className="text-white text-center text-3xl">
        Hello world {count}
      </Text>
    </View>
  );
};

export default memo(HelloWorld);
