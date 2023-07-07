import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';

const Search = ({navigation}) => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);
  return (
    <SafeAreaView className={'mt-5 '}>
      <View className={'flex-row justify-center p-4 items-center gap-3'}>
        <View
          className={
            'flex-row justify-between items-center p-2 basis-4/5 bg-white rounded-xl border border-gray-300 shadow-md'
          }>
          <TextInput
            value={inputText}
            onChangeText={text => setInputText(text)}
            className={'grow'}
            placeholder={'Title, author, subtitle...'}
          />
          <TouchableOpacity
            onPress={() => setInputText('')}
            className={
              'bg-gray-200 p-1 rounded-full flex items-center justify-center flex-row'
            }
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen', {screen: 'Home'})}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
