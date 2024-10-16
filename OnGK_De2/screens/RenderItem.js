import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RenderItem({ item, navigation }) {
  const [like, setLike] = useState(false);
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'rgba(247, 186, 131, 0.15)',
        height: 200,
        width: 150,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
      }}>
      <TouchableOpacity onPress={() => setLike(!like)}>
        <AntDesign
          name={like ? 'heart' : 'hearto'}
          size={20}
          color={like ? 'red' : 'black'}
          style={{ position: 'absolute', left: -57, top: 5 , zIndex: 1}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Screen_03', { item })}>
        <Image
          source={item.uri}
          style={{ width: 130, height: 120, objectFit: 'contain' }}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 16 }}>
            {item.name}
          </Text>
          <Text style={{ fontSize: 16 }}>
            <Text style={{ color: 'rgba(247, 186, 131, 1)' }}>$</Text>
            {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
