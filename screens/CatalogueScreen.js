import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';

const CatalogScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catalog</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/640px-2ChocolateChipCookies.jpg' }}
          style={styles.image}
          accessibilityLabel="Cookies 1"
        />
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Caneles_stemilion.jpg/800px-Caneles_stemilion.jpg' }}
          style={styles.image}
          accessibilityLabel="Canelle"
        />
        <Image
          source={{ uri: 'https://cdn0-production-images-kly.akamaized.net/Q__tmOy9zwCipii4ZQi97QB-UOw=/0x340:800x791/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3998092/original/003560000_1650253113-shutterstock_1711075648.jpg' }}
          style={styles.image}
          accessibilityLabel="Kue Salju"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 16, marginBottom: 20 },
  imageContainer: { flexDirection: 'column', justifyContent: 'space-around', width: '100%' },
  image: {
    width: Dimensions.get('window').width - 40,
    height: (Dimensions.get('window').width - 40) * 0.75,
    marginVertical: 10,
    borderRadius: 8,
  },
});

export default CatalogScreen;
