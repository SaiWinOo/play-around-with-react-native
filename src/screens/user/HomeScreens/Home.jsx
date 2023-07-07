import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import SectionTitle from '../../../components/atom/SectionTitle';
const Home = ({navigation}) => {
  const categories = [
    {
      id: 1,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
    {
      id: 2,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
    {
      id: 3,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
    {
      id: 4,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
    {
      id: 5,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
    {
      id: 6,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
    {
      id: 7,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
    {
      id: 8,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
    {
      id: 9,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
    },
  ];

  const newBooks = [
    {
      id: 1,
      cover:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
    },
    {
      id: 2,
      cover:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
    },
    {
      id: 3,
      cover:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
    },
    {
      id: 4,
      cover:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
    },
    {
      id: 5,
      cover:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
    },
  ];

  const categoryLists = categories.map(item => {
    return (
      <View key={item.id} className={'p-3 w-[120px] bg-white m-2 rounded-lg'}>
        <Text className={'text-[10px]'}>{item.title}</Text>
      </View>
    );
  });

  const newBookLists = ({item}) => {
    return (
      <View className={'p-1.5 '}>
        <Image
          className={'rounded-lg'}
          style={{width: 100, height: 150}}
          source={{
            uri: item.cover,
          }}
        />
      </View>
    );
  };
  return (
    <ScrollView className={'mt-5 p-3'}>
      <View className={'flex flex-row justify-between items-center mb-3 mx-1'}>
        <Text className={'text-lg font-bold'}>Announcement</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen', {screen: 'Search'})}
        />
      </View>
      <SectionTitle
        title={'Categories'}
        onPress={() => navigation.navigate('User', {screen: 'Category'})}
      />
      <ScrollView
        className={'h-[155px] '}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <View className={'flex flex-wrap'}>{categoryLists}</View>
      </ScrollView>
      <View className={'mb-3'}>
        <SectionTitle title={'Newly Added'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={newBooks}
          keyExtractor={item => item.id}
          renderItem={newBookLists}
        />
      </View>
      <View className={'mb-3'}>
        <SectionTitle title={'Popular'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={newBooks}
          keyExtractor={item => item.id}
          renderItem={newBookLists}
        />
      </View>
      <View className={'mb-3'}>
        <SectionTitle title={'Newly Added'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={newBooks}
          keyExtractor={item => item.id}
          renderItem={newBookLists}
        />
      </View>
      <View className={'mb-3'}>
        <SectionTitle title={'Free Book'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={newBooks}
          keyExtractor={item => item.id}
          renderItem={newBookLists}
        />
      </View>
      <View className={'mb-3'}>
        <SectionTitle title={'Random Feed'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={newBooks}
          keyExtractor={item => item.id}
          renderItem={newBookLists}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
