import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import RenderItem from './RenderItem';

const data = [
  {
    id: 1,
    uri: require('../assets/image/bifour_-removebg-preview.png'),
    name: 'Pinarelo',
    price: 1800,
  },
  {
    id: 2,
    uri: require('../assets/image/bione-removebg-preview.png'),
    name: 'Pina Mountai',
    price: 1700,
  },
  {
    id: 3,
    uri: require('../assets/image/bithree_removebg-preview.png'),
    name: 'Pina Bike',
    price: 1500,
  },
  {
    id: 4,
    uri: require('../assets/image/bitwo-removebg-preview.png'),
    name: 'Pinarelo',
    price: 1900,
  },
  {
    id: 5,
    uri: require('../assets/image/bifour_-removebg-preview.png'),
    name: 'Pinarelo',
    price: 2700,
  },
  {
    id: 6,
    uri: require('../assets/image/bifour_-removebg-preview.png'),
    name: 'Pinarelo',
    price: 1350,
  },
  {
    id: 7,
    uri: require('../assets/image/bifour_-removebg-preview.png'),
    name: 'Pinarelo',
    price: 1800,
  },
  {
    id: 8,
    uri: require('../assets/image/bifour_-removebg-preview.png'),
    name: 'Pinarelo',
    price: 1800,
  },
];

export default function Screen_02({navigation}) {
  const [title, setTitle] = useState('All');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 40,
      }}>
      <Text
        style={{
          color: 'red',
          fontSize: 20,
          fontWeight: '600',
          paddingVertical: 20,
        }}>
        The world's Best Bike
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={styles.btn} onPress={() => setTitle('All')}>
          <Text style={[styles.text, title == 'All' && styles.active]}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setTitle('Roadbike')}>
          <Text style={[styles.text, title == 'Roadbike' && styles.active]}>
            Roadbike
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setTitle('Mountain')}>
          <Text style={[styles.text, title == 'Mountain' && styles.active]}>
            Mountain
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderItem item={item} navigation={navigation}/>}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(233, 65, 65, 0.53)',
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(190, 182, 182, 1)',
  },
  active: {
    color: 'rgba(233, 65, 65, 1)',
  },
});
