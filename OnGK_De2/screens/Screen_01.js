import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function Screen_01({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        paddingHorizontal: 15,
        paddingTop: 40,
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          textAlign: 'center',
          paddingVertical: 15,
        }}>
        A premiun online store for {'\n'} sporter and their stylish choice
      </Text>
      <View style={{ width: '100%', rowGap: 20 }}>
        <View
          style={{
            backgroundColor: 'rgba(233, 65, 65, 0.1)',
            height: 300,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 35,
          }}>
          <Image
            source={require('../assets/image/bifour_-removebg-preview.png')}
            style={{ width: 260, height: 243 }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          POWER BIKE {'\n'} SHOP
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'rgba(233, 65, 65, 1)',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
        }}
        onPress={() => navigation.navigate('Screen_02')}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
            paddingVertical: 15,
          }}>
          Get start
        </Text>
      </TouchableOpacity>
    </View>
  );
}
