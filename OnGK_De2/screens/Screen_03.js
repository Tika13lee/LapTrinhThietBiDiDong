import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Screen_03({ route }) {
  const { item } = route.params;
  const [like, setLike] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 40,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(233, 65, 65, 0.1)',
          height: 380,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}>
        <Image source={item.uri} style={{ width: 280, height: 260, objectFit: "contain" }} />
      </View>
      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 27, fontWeight: '600' }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', columnGap: 50 }}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.59)',
              fontSize: 16,
              fontWeight: '500',
            }}>
            15% OFF I 350$
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              textDecorationLine: 'line-through',
            }}>
            449$
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 40, rowGap: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: '500' }}>Description</Text>
        <Text style={{ color: 'rgba(0, 0, 0, 0.57)', fontSize: 14 }}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View
        style={{
          paddingTop: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => setLike(!like)}>
          <AntDesign
            name={like ? 'heart' : 'hearto'}
            size={24}
            color={like ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            backgroundColor: 'rgba(233, 65, 65, 1)',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '500',
              textAlign: 'center',
              paddingVertical: 15,
            }}>
            Add to card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
