import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    setLoading(true);
    let res = await axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
    setLoading(false);
  };
  const Item = ({item}) => {
    return (
      <View>
        <Image
          className="w-[50px] h-[50px]"
          source={{
            uri: item.image,
          }}
        />
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View className="h-screen justify-center items-center p-3">
      <View className="flex flex-row gap-2">
        <TouchableOpacity onPress={() => setProducts([])}>
          <Text className="bg-green-400 p-3">Clear Products</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => fetchProducts()}>
          <Text className="bg-green-400 p-3">Fetch Products</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-3">
        <ActivityIndicator
          hidesWhenStopped={true}
          animating={loading}
          color={'#00ff00'}
          size={'large'}
        />
      </View>
      <FlatList data={products} renderItem={Item} />
    </View>
  );
};

export default App;
