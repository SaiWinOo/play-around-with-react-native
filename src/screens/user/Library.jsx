import React from 'react';
import {View, useWindowDimensions, Text, Image, FlatList} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

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
  {
    id: 6,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 7,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 8,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 9,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 12,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 13,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 14,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 15,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 16,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 17,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 18,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
  {
    id: 19,
    cover:
      'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982171452/how-to-win-friends-and-influence-people-9781982171452_hr.jpg',
  },
];

const Recent = () => (
  <FlatList
    className={'mx-auto'}
    showsVerticalScrollIndicator={false}
    numColumns={3}
    data={newBooks}
    renderItem={renderBooks}
  />
);

const Bookmarks = () => (
  <FlatList
    className={'mx-auto'}
    showsVerticalScrollIndicator={false}
    numColumns={3}
    data={newBooks}
    renderItem={renderBooks}
  />
);

const renderBooks = ({item}) => {
  return (
    <View className={'p-1.5'} key={item.id}>
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
const Downloaded = () => (
  <FlatList
    className={'mx-auto'}
    showsVerticalScrollIndicator={false}
    numColumns={3}
    data={newBooks}
    renderItem={renderBooks}
  />
);

const renderScene = SceneMap({
  recent: Recent,
  bookmarks: Bookmarks,
  downloaded: Downloaded,
});

export default function Library() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'recent', title: 'Recent'},
    {key: 'bookmarks', title: 'Bookmarks'},
    {key: 'downloaded', title: 'Downloaded'},
  ]);

  return (
    <TabView
      renderTabBar={props => (
        <TabBar
          {...props}
          renderLabel={({route, focused, color}) => (
            <Text style={{color, fontSize: 12}}>{route.title}</Text>
          )}
          indicatorStyle={{
            backgroundColor: '#04bcc4',
            height: 3,
            width: 92,
            marginLeft: 18,
          }}
          pressColor={'white'}
          style={{backgroundColor: 'white'}}
          activeColor="#04bcc4"
          inactiveColor="#999999"
        />
      )}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
