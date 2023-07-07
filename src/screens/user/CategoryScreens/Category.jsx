import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
const Category = () => {
  const categories = [
    {
      id: 1,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://www.pngarts.com/files/10/Earth-PNG-Image-Transparent.png',
    },
    {
      id: 2,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://img.freepik.com/premium-vector/trophy-winner-golden-cup-vector-icon_149152-49.jpg',
    },
    {
      id: 3,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://img.freepik.com/premium-vector/trophy-winner-golden-cup-vector-icon_149152-49.jpg',
    },
    {
      id: 4,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://atlas-content-cdn.pixelsquid.com/stock-images/gift-box-holiday-accessories-Q95rLQF-600.jpg',
    },
    {
      id: 5,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://www.pngarts.com/files/10/Earth-PNG-Image-Transparent.png',
    },
    {
      id: 6,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://atlas-content-cdn.pixelsquid.com/stock-images/gift-box-holiday-accessories-Q95rLQF-600.jpg',
    },
    {
      id: 7,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://img.freepik.com/premium-vector/trophy-winner-golden-cup-vector-icon_149152-49.jpg',
    },
    {
      id: 8,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://img.freepik.com/premium-vector/trophy-winner-golden-cup-vector-icon_149152-49.jpg',
    },
    {
      id: 9,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://www.pngarts.com/files/10/Earth-PNG-Image-Transparent.png',
    },
    {
      id: 10,
      title: 'ရောင်းအားအကောင်းဆုံး စာအုပ်များ',
      icon: 'https://atlas-content-cdn.pixelsquid.com/stock-images/gift-box-holiday-accessories-Q95rLQF-600.jpg',
    },
  ];

  const categoryLists = ({item}) => {
    return (
      <View
        className={
          'flex flex-row p-4 rounded-lg justify-start items-center my-1.5 bg-white'
        }>
        <View>
          <Image
            className={'mr-2'}
            style={{width: 30, height: 30}}
            source={{
              uri: item.icon,
            }}
          />
        </View>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <FlatList className={'p-4'} data={categories} renderItem={categoryLists} />
  );
};

export default Category;
